import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CaptainSigiUp() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [color, setColor] = useState('')
  const [capacity, setCapacity] = useState('')
  const [vehicleNumber, setVehicleNumber] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleModel, setVehicleModel] = useState('')
  const [captainData, setCaptainData] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault()
    const data = {
      email: email,
      fullName :{
        firstName: firstName,
        lastName: lastName
      },
      password: password,
      color: color,
      capacity: capacity,
      vehicleNumber: vehicleNumber,
      vehicleType: vehicleType,
      vehicleModel: vehicleModel
    };
    setCaptainData(data)
    console.log(captainData)
  }
  return (
    <div class='h-screen p-7'>
      <img src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" class='w-18' />
      <div>
        <h3 class='text-3xl text-center mt-3 font-semibold text-gray-800 pt-2'>Connect With Uber</h3>
        <Link to='/captainLogin' class='flex flex-col items-center text-blue-700'>Alreadr Have An Account? Login</Link>
        <h3 class='text-3xl text-center mt-3 font-semibold text-green-600'>Captain Detail</h3>
        <form action="" onSubmit={submitHandler}>
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Example123@gmail.com' />
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>First Name</h3>
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Enter your first name (Ex. Nick) ' />
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Last Name</h3>
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Enter your last name (Ex. Smith) ' />
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Enter your password' />
          <h3 class='text-3xl text-center mt-3 font-semibold text-green-600 pt-2'>Vehicle Details</h3>
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Color</h3>
          <input
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Enter your vehicle color' />
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Capacity</h3>
          <input
            required
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            type="text"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Enter your vehicle capacity' />
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Vehicle Number</h3>
          <input
            required
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            type="text"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Enter your vehicle number' />
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Vehicle Type</h3>
          <div class='flex flex-col'>
            <div class='flex'>
              <input
                type="radio"
                name="vehicleType"
                value="Car"
                checked={vehicleType === "Car"}
                onChange={(e) => setVehicleType(e.target.value)}
                class='mr-3 ml-2'
              />
              <label htmlFor="car" class='text-xl'>Car</label>
            </div>
            <div class='flex'>
              <input
                type="radio"
                name="vehicleType"
                value="Motercycle"
                checked={vehicleType === "Motercycle"}
                onChange={(e) => setVehicleType(e.target.value)}
                class='mr-3 ml-2'
              />
              <label htmlFor="Motercycle" class='text-xl'>Motercycle</label>
            </div>
            <div class='flex'>
              <input
                type="radio"
                name="vehicleType"
                value="Auto"
                checked={vehicleType === "Auto"}
                onChange={(e) => setVehicleType(e.target.value)}
                class='mr-3 ml-2'
              />
              <label htmlFor="Auto" class='text-xl'>Auto</label>
            </div>
          </div>
          <h3 class='text-2xl font-semibold text-gray-800 pt-2'>Vehicle Model</h3>
          <input
            required
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            type="text"
            class='bg-gray-200 w-full py-3 px-3 mt-1 rounded-xl'
            placeholder='Enter your vehicle model' />
          <button type="submit" class='bg-green-600 w-full text-white py-3 rounded-xl font-semibold text-2xl mt-5 mb-7'>Create account</button>
        </form>
      </div>
    </div>
  )
}

export default CaptainSigiUp