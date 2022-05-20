import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState('')

  const { _id, price, patient, patientName } = appointment

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('https://morning-tundra-52405.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      })
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setCardError(error.message)
    } else {
      setCardError('')
    }

    setSuccess('')

    setProcessing(true)

    // Confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      }
    )

    if (intentError) {
      setCardError(intentError.message)
      setProcessing(false)
    } else {
      setCardError('')
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent)
      setSuccess('Congrats! Your payment is completed')

      //store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      }

      fetch(`https://morning-tundra-52405.herokuapp.com/booking/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false)
          console.log(data)
        })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='text-center mt-4'>
          <button
            className='btn btn-success btn-sm text-white'
            type='submit'
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-500'>{cardError}</p>}
      {success && (
        <div className='text-green-500'>
          <p>{success}</p>
          <p>
            Your transaction id is{' '}
            <span className='text-orange-500 font-bold'>{transactionId}</span>
          </p>
        </div>
      )}
    </>
  )
}

export default CheckoutForm
