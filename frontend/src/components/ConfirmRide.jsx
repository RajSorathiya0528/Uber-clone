import React from 'react'

function ConfirmRide(props) {
  return (
    <div>
      <h3 className='text-3xl text-center my-3 font-semibold'>Confirm Your Ride</h3>
      <div className='flex flex-col gap-2 justify-between items-center'>
        <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" className='h-25' />
        <div className='w-full'>
          <div className='flex justify-start gap-3 items-start w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[17%] h-15 rounded-full flex justify-center items-center'>
              <i className='ri-map-pin-user-fill text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%]'>
              <h3 className='text-base'>{props.pickUpLocation}</h3>
            </div>
          </div>
          <div className='flex justify-start gap-3 items-start w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[17%] h-15 rounded-full flex justify-center items-center'>
              <i className='ri-map-pin-2-fill text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%]'>
              <h3 className='text-base'>{props.destinationLocation}</h3>
            </div>
          </div>
          <div className='flex justify-start gap-3 items-center w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[17%] h-15 rounded-full flex justify-center items-center'>
              <i className='ri-currency-line text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%] flex justify-between items-center'>
              <h3 className='text-xl font-semibold'>{props.fare[ props.vehicleType ]}</h3>
            </div>
          </div>
        </div>
        <button onClick={()=> {
          props.setVehicalFound(true)
          props.setConfirmRide(false)
          props.createRide()
        }}className='w-full mt-5 bg-green-200 text-green-900 font-semibold py-3 rounded text-2xl border-0 border-green-900 active:border-3'>
          Confirm Ride
        </button>
      </div>
    </div>
  )
}

export default ConfirmRide