import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CaptainLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password : password
    }
    setUserData(data)
    console.log(data)
  }

  return (
    <div class = 'h-screen p-7 flex flex-col justify-between'>
      <div>
        <form action="" class='mt-10' onSubmit={submitHandler}>
          <h3 class='text-2xl font-semibold'>What's Your email</h3>
          <input 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='example123@gmail.com'
            class='w-full mt-2 px-3 py-3 font-semibold text-xl bg-gray-200 rounded-xl'/>
          <h3 class='text-2xl font-semibold'>Password</h3>
          <input 
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          class='w-full mt-2 px-3 py-3 font-semibold text-xl bg-gray-200 rounded-xl'/>
          <button 
          type="submit"
          class='w-full mt-7 px-3 py-3 font-semibold text-xl bg-black text-white rounded-xl'>Login</button>
          <Link to='/captainSigiUp'><p className='text-blue-800 font-semibold text-center pt-3 font-xl'>New here? Create new account</p></Link>
        </form>
      </div>
      <div> 
        <Link to='/userLogin'class='mb-10 w-full flex justify-center mt-7 px-3 py-3 font-semibold text-xl bg-yellow-700 text-white rounded-xl'>Connnct as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin