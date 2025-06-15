import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function OtpPanal() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const isVerifyOtp = (otp) => {
    return true;
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    if(isVerifyOtp(otp)){
      navigate('/CaptainRiding')
    }
  }
  return (
    <div>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='bg-white w-[90%] md:w-[50%] lg:w-[30%] p-5 rounded-lg shadow-lg'>
          <h3 className='text-2xl font-semibold text-gray-700 mb-4'>Enter OTP</h3>
          <input 
            type="text" 
            placeholder='Enter OTP' 
            className='w-full p-3 border border-gray-300 rounded-lg mb-4' 
            required = {true}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            />
          <button 
            className='bg-green-500 text-white font-semibold py-3 px-6 rounded-lg w-full'
            onClick={(e) => {
              handelSubmit(e);
              // Here you can add the logic to verify the OTP
            }}>Verify OTP</button>
        </div>
      </div>
    </div>
  )
}

export default OtpPanal