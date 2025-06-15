import React from 'react'

function CaptainDetail(props) {
    return (
        <div >
            <div className='flex items-center justify-start gap-3 my-4 p-3 bg-green-200 '>
                <img className='h-15 w-15 rounded-full object-cover' src="https://imgs.search.brave.com/GgfLHc2XwdgXoZJ4tkX-ifaNe46xTNc9TXC7JoC1Cis/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/Mjk2NDQ1OS9waG90/by9ub3RoaW5nLWlz/LWEtbWFnbmV0LWZv/ci1zdWNjZXNzLWxp/a2Utc2VsZi1jb25m/aWRlbmNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0xaU1z/WTE0eV84SnRXQTJP/ZW8wVENRUVllM0pp/bzc4TzFRMk14S1da/UW5JPQ" alt="" />
                <h4 className='text-2xl font-semibold text-gray-700'>Mohan mishra</h4>
            </div>
            <div className='bg-green-100 flex items-center justify-between my-4 p-3'>
                <h4 className='text-xl font-medium text-gray-600'>295.20$</h4>
                <p className='text-xl font-medium text-gray-600'>Earned</p>
            </div>
            <div className='flex items-center justify-between bg-green-50 py-6 px-4 my-8'>
                <div className='flex flex-col items-center justify-between text-'>
                    <i className='ri-timer-2-line text-3xl'></i>
                    <h5 className='text-xl'>10.2</h5>
                    <p>Hours Online</p>
                </div>
                <div className='flex flex-col items-center justify-between text-'>
                    <i className='ri-speed-up-line text-3xl'></i>
                    <h5 className='text-xl'>12</h5>
                    <p>Total Rides</p>
                </div>
                <div className='flex flex-col items-center justify-between text-'>
                    <i className='ri-booklet-line text-3xl'></i>
                    <h5 className='text-xl'>230</h5>
                    <p>Km distence</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetail