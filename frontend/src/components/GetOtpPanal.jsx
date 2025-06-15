import React from 'react'

function GetOtpPanal(props) {
  return (
    <div>
        <div className='flex items-center justify-between gap-3 my-2 p-3'>
            <div className='flex items-center justify-start gap-3'>
                <img src="https://imgs.search.brave.com/2CH8ipWzpXronEEntlNy2xbyvXN6KloHCN26UV3lcgo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MDMwNDQxMS9waG90/by9iZWF1dGlmdWwt/c21pbGluZy1hZnJp/Y2FuLWV0aG5pY2l0/eS1idXNpbmVzc3dv/bWFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1hYVBIX0U2/QnBYcUVNUHBCZTRD/WktvNkRLWkhGcG84/OTFHRHJ5dEhWRGFv/PQ" alt="" className='h-15 w-15 object-cover rounded-full' />
                <h4 className='text-xl font-semibold text-gray-500'>Jayant yadav</h4>
            </div>
            <h4 className='font-semibold'>20 km</h4>
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
              <h3 className='text-xl font-semibold'>+91 1234567890</h3>
            </div>
          </div>
        </div>
        <div className='w-full mt-5 flex justify-evenly items-center'>
            <button onClick={
                () => {
                    props.setGetOtpPanal(false);
                    props.setRidePopupPanal(false);
                }
            }className='bg-gray-200 py-4 px-10 font-semibold rounded-xl mb-3 text-xl'>Cencel Ride</button>
            <button onClick={() => {
                props.setConfirmOtpPanal(true);
                props.setGetOtpPanal(false);
                props.setRidePopupPanal(false);
            }}className='bg-green-500 text-white font-semibold rounded-xl py-4 px-10 mb-3 text-xl'>Get Otp</button>
        </div>
    </div>
  )
}

export default GetOtpPanal