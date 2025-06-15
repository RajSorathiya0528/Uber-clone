import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CaptainRiding() {
  const navigate = useNavigate();
  return (
    <>
      <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
        <img className="w-16 "src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt=""/>
        <Link to='/CaptainLogin' className='h-10 w-10 bg-white flex items-center justify-center'>
          <i className='text-3xl font-midium ri-logout-box-r-line'></i>
        </Link>
      </div>
      <div className='h-screen flex flex-col justify-between'>
        <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""/>
        </div>
        <div className='h-1/5 p-4'>
          <div className='bg-white p-4 rounded-lg shadow-lg'>
            <p className='text-gray-600'>Dropoff Location: 456 Elm St</p>
            <p className='text-gray-600'>Estimated Fare: $15.00</p>
          </div>
        </div>
        <div className='fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg'>
        <button onClick={
          () => {
            navigate('/CaptainHome');
          }
        } className='w-full bg-green-500 text-white py-2 rounded-lg'>
          Complite Ride
        </button>
        </div>
      </div>
    </>
  )
}

export default CaptainRiding