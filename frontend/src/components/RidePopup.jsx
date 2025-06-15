import React from 'react'

function RidePopup(props) {
  return (
    <div>
        <h4 className='mt-2 text-2xl font-semibold p-4'>New Ride Available!</h4>
        <div className='flex items-center justify-between gap-3 my-2 p-3'>
            <div className='flex items-center justify-start gap-3'>
                <img src="https://imgs.search.brave.com/2CH8ipWzpXronEEntlNy2xbyvXN6KloHCN26UV3lcgo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MDMwNDQxMS9waG90/by9iZWF1dGlmdWwt/c21pbGluZy1hZnJp/Y2FuLWV0aG5pY2l0/eS1idXNpbmVzc3dv/bWFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1hYVBIX0U2/QnBYcUVNUHBCZTRD/WktvNkRLWkhGcG84/OTFHRHJ5dEhWRGFv/PQ" alt="" className='h-10 w-10 object-cover rounded-full' />
                <h4 className='text-xl font-semibold text-gray-500'>Jayant yadav</h4>
            </div>
            <h4 className='font-semibold'>20 km</h4>
        </div>
        <div>
            <div className='flex justify-start gap-3 items-start w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[10%] h-10 rounded-full flex justify-center items-center'>
              <i className='ri-map-pin-user-fill text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%]'>
              <h3 className='text-base'>B10 Near Rajwadi cafe Royal City Petrol Pump, Gandhinagar, Gujarat</h3>
            </div>
          </div>
          <div className='flex justify-start gap-3 items-start w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[10%] h-10 rounded-full flex justify-center items-center'>
              <i className='ri-map-pin-2-fill text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%]'>
              <h3 className='text-base'>Smart City Point galkasdi ahemdabad, Gujarat</h3>
            </div>
          </div>
          <div className='flex justify-start gap-3 items-center w-full p-3 border-b-2 border-gray-300'>
            <div className='bg-gray-200 w-[10%] h-10 rounded-full flex justify-center items-center'>
              <i className='ri-currency-line text-gray-700 text-3xl'></i>
            </div>
            <div className='w-[83%] flex justify-between items-center'>
              <h3 className='text-xl font-semibold'>$193.21</h3>
            </div>
          </div>
        </div>
        <div>
            <button onClick={() =>{
                props.setRidePopupPanal(false);
                props.setGetOtpPanal(true);
            }}className='w-full mt-5 bg-green-200 text-green-900 font-semibold py-3 rounded text-2xl border-0 border-green-900 active:border-3'>
              Accept Ride
            </button>
            <button onClick={() => {
                props.setRidePopupPanal(false);
            }}className='w-full mt-2 mb-3 bg-red-200 text-red-900 font-semibold py-3 rounded text-2xl border-0 border-red-900 active:border-3'>
              Reject Ride
            </button>
        </div>
    </div>
  )
}

export default RidePopup