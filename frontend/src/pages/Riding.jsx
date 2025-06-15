import React from 'react'

const Riding = () => {
  return (
    <div>
      <div className='h-1/2'>
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/2 bg-white p-5 flex flex-col justify-between'>
        <div className='flex flex-col gap-2 justify-between items-center'>
        <div className='flex items-center justify-between w-full '>
          <div>
            <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" className='h-25' />
          </div>
          <div className='text-right'>
            <h3 className='text-2xl font-semibold text-gray-600'>Manohar Trivedi</h3>
            <h3 className='text-2xl font-semibold text-gray-800'>Ab GJ4 1234</h3>
            <h3 className='text-xl text-gray-600'>2 mins away</h3>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex justify-start gap-3 items-start w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[17%] h-15 rounded-full flex justify-center items-center'>
              <i className='ri-map-pin-user-fill text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%]'>
              <h3 className='text-base'>B10 Near Rajwadi cafe Royal City Petrol Pump, Gandhinagar, Gujarat</h3>
            </div>
          </div>
          <div className='flex justify-start gap-3 items-start w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[17%] h-15 rounded-full flex justify-center items-center'>
              <i className='ri-map-pin-2-fill text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%]'>
              <h3 className='text-base'>Smart City Point galkasdi ahemdabad, Gujarat</h3>
            </div>
          </div>
          <div className='flex justify-start gap-3 items-center w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[17%] h-15 rounded-full flex justify-center items-center'>
              <i className='ri-currency-line text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%] flex justify-between items-center'>
              <h3 className='text-xl font-semibold'>$193.21</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='flex justify-center items-center w-full h-20 bg-white'>
        <button className='bg-green-500 py-3 text-center text-white font-semibold text-2xl'>Make A Payment</button>
      </div>
    </div>
  )
}

export default Riding
