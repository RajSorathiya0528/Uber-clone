import React from 'react'

function VehicalPanal(props) {
    return (
        <div>
            <h3 className='text-3xl text-center my-3 font-semibold'>Chooes a vehical</h3>
            <div onClick={()=>{
                props.setConfirmeRide(true);
            }}className='flex border-2 border-white active:border-black mb-2 rounded-xl items-center w-full p-3 justify-between'>
                <img className="h-15" src="https://static.vecteezy.com/system/resources/thumbnails/055/142/646/small/illustration-of-a-sleek-black-sedan-car-side-profile-perfect-for-automotive-businesses-driving-concepts-or-transportation-themes-png.png" alt="" srcset="" />
                <div className='w-1/2'>
                    <h4 className='text-2xl font-semibold'>
                        UberGo
                        <span> <i className='ri-user-3-fill' />4</span>
                    </h4>
                    <h5 className='text-xl font-semibold'>2 mins away </h5>
                    <p>affordable, compact rides</p>
                </div>
                <h3 className='text-2xl font-semibold'>$193</h3>
            </div>
            <div onClick={()=>{
                props.setConfirmeRide(true);
            }}className='flex border-2 border-white active:border-black mb-2 rounded-xl items-center w-full p-3 justify-between'>
                <img className="h-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" srcset="" />
                <div className='w-1/2'>
                    <h4 className='text-2xl font-semibold'>
                        UberGo
                        <span> <i className='ri-user-3-fill' />1</span>
                    </h4>
                    <h5 className='text-xl font-semibold'>2 mins away </h5>
                    <p>affordable, compact rides</p>
                </div>
                <h3 className='text-2xl font-semibold'>$90</h3>
            </div>
            <div onClick={()=>{
                props.setConfirmeRide(true);
            }}className='flex border-2 border-white active:border-black mb-2 rounded-xl items-center w-full p-3 justify-between'>
                <img className="h-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" srcset="" />
                <div className='w-1/2'>
                    <h4 className='text-2xl font-semibold'>
                         UberGo
                        <span> <i className='ri-user-3-fill' />3</span>
                    </h4>
                    <h5 className='text-xl font-semibold'>2 mins away </h5>
                    <p>affordable, compact rides</p>
                </div>
                <h3 className='text-2xl font-semibold'>$126</h3>
            </div>
        </div>
    )
}

export default VehicalPanal