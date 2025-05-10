import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate()

  
  const submitHandeler = async (e) => {
    e.preventDefault();
    const data = {
      email : email,
      password : password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/login`, data)
    if(response.status === 200){
      alert('Login successfully')
      setUser(data.user)
      localStorage.setItem('token', response.data.token);
      navigate('/home')
    }
  }

  return (
    <div class='h-screen p-7'>
      <div class='mt-10'>
        <form action="" class='flex flex-col' onSubmit={submitHandeler}>
          
          <h3 class="text-2xl font-semibold">What's your email : </h3>
          <input 
            required
            value = {email} 
            onChange = {(e) => {
              setEmail(e.target.value)
            }}
            type="email" 
            class='w-full bg-gray-200 py-3 px-2 text-xl mt-3 rounded-lg' 
            placeholder='example123@gmail.com'
          />
          <h3 
            class="text-2xl font-semibold mt-2"
          >Password : </h3>
          <input 
            required 
            value = {password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password" 
            class='w-full bg-gray-200 py-3 px-2 text-xl mt-3 rounded-lg' 
            placeholder='Password'
          />
          <button type="submit" class='w-full py-3 text-xl text-white bg-gray-800 rounded-xl mt-5 font-semibold'>Login</button>
          <Link class='py-3 text-blue-700 mt-1 text-center' to='/UserSignUp'>New here? Signup</Link>
        </form>
      </div>
      <div class='flex flex-col items-center mt-10'>
        <Link to='/captainLogin' class='w-full bg-black text-white font-semibold text-xl py-3 rounded-xl bg-green-500 text-center'>Signin as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin