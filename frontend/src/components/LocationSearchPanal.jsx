import React from 'react'

function LocationSearchPanal(props) {
  const suggestion = props.suggestion
  const LocationSuggestionClick = (suggestion) => {
  if (props.activeField === 'pickup'){
    props.setPickUpLocation(suggestion.description);
  }else if(props.activeField === 'destination'){
    props.setDestinationLocation(suggestion.description);
  }
  // setVehiclePanel(true)
  // setPanelOpen(false)
}

  return (
    <div>
      {
        suggestion.map((elem, index) => {
          return <h4 key={index} onClick={() => 
           LocationSuggestionClick(elem)
          } className='text-gray-500 border-2 px-2 rounded-xl border-white active:border-black text-xl font-semibold mb-3 w-full bg-gray-100 p-3 rounded'>
            <i className='ri-map-pin-2-line mr-2 text-gray-900'></i>
            {elem.description}
        </h4>
        })
      }
    </div>
  )
}

export default LocationSearchPanal