import React from 'react'
import ButtonGroup from './ButtonGroup';

function LeftContainer({stageCount, setStageCount}) {
    const TEXT_STAGE = [
        "Apply to work with our agency",
        'What is your budget?',
        "Anything else we should know",
        "Thank You!"
    ]

    let content;
    if ( stageCount === 0 ) {
        content = (
            <input className='bg-slate-600 border-b-2 mx-10 text-white placeholder:text-white' 
            placeholder=' What is your email?'></input>
        )
    } else if ( stageCount === 1) { 
        content = (
        <ButtonGroup />
        )
    } else if (stageCount === 2) {
        content = (
            <input className='bg-slate-600 border-b-2 mx-10 text-white placeholder:text-white' 
            placeholder=' Tell us more ...'></input>) }


  return (
    
        <div className='flex flex-col justify-center bg-slate-600 w-1/2 h-screen'>
        <h3 className='text-5xl mb-10 text-white'>{TEXT_STAGE[stageCount]}</h3>
        {content}
       
            
            {stageCount !== 3 ? <button 
            onClick={() => setStageCount(stageCount + 1 )}
            className='text-slate-600 ml-32 mt-8 bg-white rounded-sm w-1/4'>Next</button> : null}
        </div>

  )
}

export default LeftContainer