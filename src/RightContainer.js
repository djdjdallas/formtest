import React from 'react'

function RightContainer({stageCount}) {
 
 
    const IMAGE_LINKS = [
    'https://assets.codepen.io/6060109/form-stage-1.png',
'https://assets.codepen.io/6060109/form-stage-2.png',
'https://assets.codepen.io/6060109/form-stage-3.png',
'https://assets.codepen.io/6060109/form-stage-4.png',
 ]


  return (
    <>
    <img height='100%'  width='50%' className='h-screen w-1/2' alt='computer' src={IMAGE_LINKS[stageCount]}></img>
    </>
  )
}

export default RightContainer