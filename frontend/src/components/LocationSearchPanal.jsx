import React from 'react'

function LocationSearchPanal(props) {
  const location = [
    "2B near capoochino, restorant, 2nd floor, 3rd street, Delhi, India",
    "24B near rajvadi, restorant, 3rd street, Delhi, India",
    "10A near kadai, restorant, 100th floor, Delhi, India",
  ];

  return (
    <div>
      {
        location.map(function (elem, index){
          return <h4 key={index} onClick={() => {
            props.setVehicalPanalOpen(true);
            props.setPanalOpen(false);
            props.setArrow(false);
          }} className='text-gray-500 border-2 px-2 rounded-xl border-white active:border-black text-xl font-semibold mb-3 w-full bg-gray-100 p-3 rounded'>
            <i className='ri-map-pin-2-line mr-2 text-gray-900'></i>
            {elem}
        </h4>
        })
      }
    </div>
  )
}

export default LocationSearchPanal