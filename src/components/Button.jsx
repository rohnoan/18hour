import React from 'react'

export default function Button(props) {

  const {func}=props

  return ( 
    <div>
      <button onClick={func}
      className='mx-auto px-8  py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
        { props.text}
          </button>
    </div>
  )
}
