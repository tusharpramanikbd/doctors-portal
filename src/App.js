import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Appointment from './Pages/Appointment/Appointment'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth'
import SignUp from './Pages/Login/SignUp'
import NotFound from './Pages/NotFound/NotFound'
import Navbar from './Pages/Shared/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/appointment'
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
