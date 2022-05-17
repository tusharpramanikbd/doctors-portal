import React from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from 'react-hook-form'
import Loading from '../Shared/Loading'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  let gErrorElement, errorElement
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name })
    navigate('/appointment')
  }

  if (loading || gLoading) {
    return <Loading />
  }

  if (user || gUser) {
    console.log(user || gUser)
  }

  if (gError) {
    gErrorElement = <p className='text-red-500 mt-2'>Error: {gError.message}</p>
  }
  if (userError) {
    errorElement = (
      <p className='text-red-500 mt-2'>Error: {userError.message}</p>
    )
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-center text-2xl font-bold'>SignUp</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='Your name'
                className='input input-bordered w-full max-w-xs'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'name is required',
                  },
                })}
              />
              <label className='label'>
                {errors.name?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Your email'
                className='input input-bordered w-full max-w-xs'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid email',
                  },
                })}
              />
              <label className='label'>
                {errors.email?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Password'
                className='input input-bordered w-full max-w-xs'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
              />
              <label className='label'>
                {errors.password?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorElement}
            <input
              className='btn w-full max-w-xs text-white'
              type='submit'
              value='SignUp'
            />
          </form>
          <p className='text-center'>
            <small>
              Already have an account?{' '}
              <Link to='/login' className='text-primary'>
                Please login
              </Link>
            </small>
          </p>
          <div className='divider'>OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-outline'
          >
            Continue with google
          </button>
          {gErrorElement}
        </div>
      </div>
    </div>
  )
}

export default SignUp