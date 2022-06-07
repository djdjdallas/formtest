import React, { useState } from 'react'

function ButtonGroup() {
 const BUTTON_TEXT = [
     '$2K', '$5K', 'No Limit'
 ]
 const [ selectedButton, setSelectedButton] = useState();
 const BUTTON_STYLE = {
     backgroundColor: "#475569",
    color: 'white',
    border: '1px solid white'
 }



  return (
    <div className='flex  justify-evenly'>
        
        {BUTTON_TEXT.map((button, i) => 
            <button className='bg-white text-slate-600 w-1/4 py-1 font-bold'
            onClick={() => 
                setSelectedButton(i)
            }
            style={selectedButton === i ? BUTTON_STYLE : {}}
            >{button}</button> )}
        </div> 
  )
}

export default ButtonGroup