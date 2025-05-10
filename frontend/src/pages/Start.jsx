import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
        <div class='h-screen w-full flex flex-col justify-between bg-[url(https://imgs.search.brave.com/swF9yimupNPd-oDdVS_lqUFft9UuAEcmzKjqJLyC-zE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbGx1bWluYXRl/ZC1yb2FkLXNpZ24t/YWdhaW5zdC1za3lf/MTA0ODk0NC0xMzk5/NDIwMC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw)] bg-cover bg-no-repeat bg-center'>
            <img src="https://logos.logofury.com/logo_src/2ecf05da5e8dcfaf46f68436467b4cc6.png" alt="uber-logo" className='w-16 mt-5 ml-5'/>
            <div class ='bg-white py-10 px-4'>
                <h2 class='text-2xl font-semibold mb-2'>Get Started With Uber</h2>
                <Link to='/UserLogin' class='inline-block text-center w-full bg-black text-white text-semibold py-3 rounded-xl'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start