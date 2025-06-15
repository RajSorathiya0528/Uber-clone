import { Link } from 'react-router-dom'
import React, { useState, useRef, use } from 'react'
import GetOtpPanal from '../components/GetOtpPanal'
import CaptainDetail from '../components/CaptainDetail'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import OtpPanal from '../components/OtpPanal'

function CaptainHome() {

  const [RidePopupPanal, setRidePopupPanal] = useState(false);
  const [getOtpPanal, setGetOtpPanal] = useState(false); 
  const [confirmOtpPanal, setConfirmOtpPanal] = useState(false);

  const RidePopupRef = useRef(null);
  const OtpPanalRef = useRef(null);
  const OtpRef = useRef(null);

  useGSAP(function(){
    if(RidePopupPanal){
      gsap.to(RidePopupRef.current, {
        translateY: 0,
        duration: 0.5,
      })
    }else{
      gsap.to(RidePopupRef.current, {
        translateY: '100%',
        duration: 0.5,
      })
    }
  }, [RidePopupPanal]);

  useGSAP(function(){
    if(getOtpPanal){
      gsap.to(OtpPanalRef.current, {
        translateY: 0,
        duration: 0.5,
      })
    }else{
      gsap.to(OtpPanalRef.current, {
        translateY: '100%',
        duration: 0.5,
      })
    }
  }, [getOtpPanal]);

  useGSAP(function(){
    if(confirmOtpPanal){
      gsap.to(OtpRef.current, {
        translateY: 0,
        duration: 0.5,
      })
    }else{
      gsap.to(OtpRef.current, {
        translateY: '100%',
        duration: 0.5,
      })
    }
  }, [confirmOtpPanal]);

  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
        <img className="w-16 "src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt=""/>
        <Link to='/CaptainLogin' className='h-10 w-10 bg-white flex items-center justify-center'>
          <i className='text-3xl font-midium ri-logout-box-r-line'></i>
        </Link>
      </div>
      <div className='h-3/5' onClick={() => {
        if(RidePopupPanal){
          setRidePopupPanal(!RidePopupPanal);
        } 
      }}>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""/>
      </div>
      <div className='h-2/5 p-4'>
        <CaptainDetail/>
      </div>
      <div ref={RidePopupRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 pt-1'>
        <RidePopup setRidePopupPanal={setRidePopupPanal} setGetOtpPanal={setGetOtpPanal}/>
      </div>
      <div ref={OtpPanalRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 pt-1'>
        <GetOtpPanal setGetOtpPanal={setGetOtpPanal} setRidePopupPanal={setRidePopupPanal} setConfirmOtpPanal={setConfirmOtpPanal}/>
      </div>
      <div ref={OtpRef} className='fixed w-full z-10 translate-y-full bottom-0 px-3 pt-1 h-full flex items-center justify-center bg-gray-100'>
        <OtpPanal />
      </div>
    </div>
  )
}

export default CaptainHome