import React, {useState, useRef} from 'react'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanal from '../components/LocationSearchPanal';
import VehicalPanal from '../components/VehicalPanal';
import ConfirmRide from '../components/ConfirmRide';
import WaitForDriver from '../components/WaitForDriver';
import LookingForDriver from '../components/LookingForDriver';
import { UserProvider } from '../context/UserContext'

function Home() {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [panalOpen, setPanalOpen] = useState(false);
  const [arrorw, setArrow] = useState(false)
  const [vehicalPanalOpen, setVehicalPanalOpen] = useState(false);
  const [confirmeRide, setConfirmeRide] = useState(false);
  const [vehicalFound, setVehicalFound] = useState(false);
  const [lookinForDriver, setLookingForDriver] = useState(false);
  const [pickupSuggestion, setPickupSuggestion] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [activeField, setActiveField] = useState(null);
  const [ vehicleType, setVehicleType ] = useState(null)
  const [fare, setFare] = useState({});

  const confirmeRideRef = useRef(null);
  const vehicalPanalRef = useRef(null);
  const panalRef = useRef(null);
  const arrowRef = useRef(null);
  const vehicalFoundRef = useRef(null);
  const LookingForDriverRef = useRef(null);

  const navigate = useNavigate()
  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserProvider)

  const handlePickupChange = async(e) => {
    setPickUpLocation(e.target.value);
    try{
      const response = await axios.get(`http://localhost:3000/api/maps/get-suggetion`, 
        {params : {input : e.target.value}}
        //{headers : {Authorization : `Bearer ${localStorage.getItem('token')}` }}
      )
      setPickupSuggestion(response.data)
    }catch(error){
      throw new Error(error);
    }
  }

  const hendleDestinationChange = async (e) => {
    setDestinationLocation(e.target.value);
    try{
      const response = await axios.get(`http://localhost:3000/api/maps/get-suggetion`,
        {params : {input : e.target.value}},
        {headers : {Authorization : `Bearer ${localStorage.getItem('token')}` }}
      )
      setDestinationSuggestions(response.data)
    } catch(error){
      throw new Error(error);
    }
  }

  const submitHandler = (e) => {
     e.preventDefault()
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

  async function findTrip() {
    setVehicalPanalOpen(true)
    setPanalOpen(false)
    const pickup = pickUpLocation
    const destination = destinationLocation
    const fare = await axios.get(`http://localhost:3000/api/v1/rides/get-fare`, {
      params: { pickup, destination},
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setFare(fare.data)
    }

  async function createRide(vehicleType) {
        const pickup = pickUpLocation;
        const destination = destinationLocation; 
        const response = await axios.post(`http://localhost:3000/api/v1/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

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
                      console.log("pickup is clicked")
                      setPanalOpen(true)
                      setArrow(true)
                      setActiveField('pickup')
                      console.log(activeField)
                    }}
                    value={pickUpLocation}
                    onChange={handlePickupChange}
                    placeholder='Add a pick-up Location' 
                    className='mx-2 my-2 w-full bg-gray-200 py-3 pl-5 rounded'/>
                  <input 
                    type="text"
                    onClick={() => {
                      setPanalOpen(true)
                      setArrow(true)
                      setActiveField('destination')
                    }} 
                    value={destinationLocation}
                    onChange={hendleDestinationChange}
                    placeholder='Add a destination Location' 
                    className='mx-2 my-1 w-full bg-gray-200 py-3 pl-5 rounded'/>
                </form>
                <button
                  onClick={findTrip}
                  className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                  Find Trip
                </button>
              </div>
              <div className='bg-white h-0 p-0' ref={panalRef}>
                    <LocationSearchPanal 
                    suggestion = {activeField == 'pickup' ? pickupSuggestion : destinationSuggestions}
                    setArrow = {setArrow} 
                    setPanalOpen = {setPanalOpen} 
                    setVehicalPanalOpen = {setVehicalPanalOpen}
                    setPickUpLocation = {setPickUpLocation}
                    setDestinationLocation = {setDestinationLocation} 
                    activeField = {activeField} />
              </div>
        </div>
        <div ref={vehicalPanalRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <h4 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
            setVehicalPanalOpen(!vehicalPanalOpen);
          }}><i className='text-2xl font-semibold text-gray-200 ri-arrow-down-wide-line'></i> </h4>
          <VehicalPanal 
            selectVehicle={setVehicleType}
            setVehicalPanalOpen={setVehicalPanalOpen} 
            setConfirmeRide={setConfirmeRide} 
            fare={fare}/>
        </div>
        <div ref={confirmeRideRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <h4 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
            setConfirmeRide(!confirmeRide);
            setVehicalPanalOpen(!vehicalPanalOpen);
          }}><i className='text-2xl font-semibold text-gray-200 ri-arrow-down-wide-line'></i> </h4>
          <ConfirmRide
          createRide = {createRide}
          pickUpLocation = {pickUpLocation}
          destinationLocation = {destinationLocation} 
          fare = {fare}
          vehicleType = {vehicleType}
          setConfirmeRide = {setConfirmeRide}
          setVehicalFound={setVehicalFound}/>
        </div>
        <div ref={vehicalFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <LookingForDriver 
          createRide = {createRide}
          pickUpLocation = {pickUpLocation}
          destinationLocation = {destinationLocation}
          fare = {fare}
          vehicleType = {vehicleType}
          setVehicalFound = {setVehicalFound}/>
        </div>
        <div ref={LookingForDriverRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full h-[0] overflow-y-scroll'>
          <h4 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
            setConfirmeRide(!confirmeRide);
            setVehicalPanalOpen(!vehicalPanalOpen);
            setLookingForDriver(!lookinForDriver);
          }}><i className='text-2xl font-semibold text-gray-200 ri-arrow-down-wide-line'></i> </h4>
          <WaitForDriver 
            ride = {ride}
          />
        </div>
      </div>
    </>
  )
}

export default Home