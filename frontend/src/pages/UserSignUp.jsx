import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext.jsx';

function UserSignUp() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      fullname :{
        firstname: firstName,
        lastname: lastName
      },
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/register`, data)
    if(response.status === 201){
      setUser(data.user)
      localStorage.setItem('token', response.data.token);
      alert('account created successfully')
      navigate('/home')
    }
  }
  return (
    <div class='h-screen'>
      <div class='p-7'>
        <img src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" class='w-18 mb-15'/>
        <h3 class='text-3xl font-semibold text-gray-800 text-center pt-2'>Connect With Uber</h3>
        <form action="" onSubmit={submitHandler}>
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>whats your email ?</h3>
          <input 
            type="email" 
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            required 
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl' 
            placeholder='example123@gmail.com'/>
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>First Name</h3>
          <input 
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text" 
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl' 
            placeholder='Enter your first name (Ex. Nick) '/>
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Last Name</h3>
          <input 
            type="text" 
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl' 
            placeholder='Enter your last name (Ex. Smith) '/>
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Password</h3>
          <input 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl' 
            placeholder='Enter your password'/>
          <button type="submit" class='bg-gray-900 text-white font-semibold w-full py-3 mt-3 rounded-xl'>Create Account</button>
        </form>
        <Link to='/userLogin' class='flex flex-col items-center text-blue-800 mt-2'>Already Have An Account? Login</Link>
      </div>
      <div class='p-7'>
        <Link to='/captainSigiUp' class='mb-10 w-full flex justify-center mt-7 px-3 py-3 font-semibold text-xl bg-yellow-700 text-white rounded-xl'>Connect as Captain</Link>
      </div>
    </div>
  )
}

export default UserSignUp