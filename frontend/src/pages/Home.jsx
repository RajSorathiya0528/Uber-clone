import React, {useState, useRef} from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanal from '../components/LocationSearchPanal';
import VehicalPanal from '../components/VehicalPanal';
import ConfirmRide from '../components/ConfirmRide';
import WaitForDriver from '../components/WaitForDriver';
import LookingForDriver from '../components/LookingForDriver';

function Home() {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [panalOpen, setPanalOpen] = useState(false);
  const [arrorw, setArrow] = useState(false)
  const [vehicalPanalOpen, setVehicalPanalOpen] = useState(false);
  const [confirmeRide, setConfirmeRide] = useState(false);
  const [vehicalFound, setVehicalFound] = useState(false);
  const [lookinForDriver, setLookingForDriver] = useState(false);

  const confirmeRideRef = useRef(null);
  const vehicalPanalRef = useRef(null);
  const panalRef = useRef(null);
  const arrowRef = useRef(null);
  const vehicalFoundRef = useRef(null);
  const LookingForDriverRef = useRef(null);


  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(function() {
    if(arrorw){
      gsap.to(arrowRef.current, {
        display: 'block',
        opacity: 1,
        duration: 0.5,
      })
    }else{
      gsap.to(arrowRef.current, {
        display: 'none',
        opacity: 0,
        duration: 0.5,
      })
    }
    if(panalOpen){
      gsap.to(panalRef.current,{
        height: '70%',
        padding: '20px',
        duration: 0.5,
      })
    }else{
      gsap.to(panalRef.current,{
        height: '0%',
        padding: '0px',
      })
    }
  }, [panalOpen]);

  useGSAP(function(){
    if(vehicalPanalOpen){
      gsap.to(vehicalPanalRef.current, {
        transform: 'translateY(0)',
        height: '60%'
      }) 
    }else{
      gsap.to(vehicalPanalRef.current,{
        transform: 'translateY(100%)',
        height: '0%',
      })
    }
  }, [vehicalPanalOpen]);
   
  useGSAP(function(){
    if(confirmeRide){
      gsap.to(confirmeRideRef.current, {
        transform: 'translateY(0)',
        height: '65%'
      })
    }else{
      gsap.to(confirmeRideRef.current, {
        transform: 'translateY(100%)',
        height: '0%',
      })
    }
  },[confirmeRide]);

  useGSAP(function(){
    if(vehicalFound){
      gsap.to(vehicalFoundRef.current, {
        transform: 'translateY(0)',
        height: '65%'
      })
    }else{
      gsap.to(vehicalFoundRef.current, {
        transform: 'translateY(100%)',
        height: '0%',
      })
    }
  },[vehicalFound]);

  useGSAP(function(){
    if(lookinForDriver){
      gsap.to(LookingForDriverRef.current, {
        transform: 'translateY(0)',
        height: '65%'
      })
    }else{
      gsap.to(LookingForDriverRef.current, {
        transform: 'translateY(100%)',
        height: '0%',
      })
    }
  },[lookinForDriver]);

  return (
    <>
      <div onclick={()=> {
        setPanalOpen(false);
        setArrow(false);
        setVehicalPanalOpen(false);
      }}className='absolute w-full overflow-hidden'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="uber-logo" className='w-16 absolute ml-5 mt-5'/>
        <div>
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" className='h-screen object-cover'/>
        </div>
        <div className='h-screen flex flex-col justify-end absolute bottom-0 w-full'>
              <div className='h-[30%] bg-white p-5 releative'>
                <h5 ref={arrowRef} className='text-gray-900 text-5xl font-semibold absolute top-2 right-3 opacity-0' onClick={() => {
                  setPanalOpen(!panalOpen)
                  setArrow(!arrorw)
                }}>
                  <i class='ri-arrow-down-wide-line' />
                </h5>
                <h2 className='text-2xl font-semibold mb-5'>Find a trip</h2>
                <form onSubmit={(e)=> {
                  submitHandler(e);
                }}>
                  <input 
                    type="text" 
                    onClick={() => {
                      setPanalOpen(true)
                      setArrow(true)
                    }}
                    value={pickUpLocation}
                    onChange={(e) => setPickUpLocation(e.target.value)}
                    placeholder='Add a pick-up Location' 
                    className='mx-2 my-2 w-full bg-gray-200 py-3 pl-5 rounded'/>
                  <input 
                    type="text"
                    onClick={() => {
                      setPanalOpen(true)
                      setArrow(true)
                    }} 
                    value={destinationLocation}
                    onChange={(e) => setDestinationLocation(e.target.value)}
                    placeholder='Add a destination Location' 
                    className='mx-2 my-1 w-full bg-gray-200 py-3 pl-5 rounded'/>
                </form>
              </div>
              <div className='bg-white h-0 p-0' ref={panalRef}>
                    <LocationSearchPanal setArrow={setArrow} setPanalOpen={setPanalOpen} setVehicalPanalOpen={setVehicalPanalOpen}/>
              </div>
        </div>
        <div ref={vehicalPanalRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <h4 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
            setVehicalPanalOpen(!vehicalPanalOpen);
          }}><i className='text-2xl font-semibold text-gray-200 ri-arrow-down-wide-line'></i> </h4>
          <VehicalPanal setVehicalPanalOpen={setVehicalPanalOpen} setConfirmeRide={setConfirmeRide}/>
        </div>
        <div ref={confirmeRideRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <h4 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
            setConfirmeRide(!confirmeRide);
            setVehicalPanalOpen(!vehicalPanalOpen);
          }}><i className='text-2xl font-semibold text-gray-200 ri-arrow-down-wide-line'></i> </h4>
          <ConfirmRide setVehicalFound={setVehicalFound}/>
        </div>
        <div ref={vehicalFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <LookingForDriver />
        </div>
        <div ref={LookingForDriverRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <h4 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
            setConfirmeRide(!confirmeRide);
            setVehicalPanalOpen(!vehicalPanalOpen);
            setLookingForDriver(!lookinForDriver);
          }}><i className='text-2xl font-semibold text-gray-200 ri-arrow-down-wide-line'></i> </h4>
          <WaitForDriver />
        </div>
      </div>
    </>
  )
}

export default Home