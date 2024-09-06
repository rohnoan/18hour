import React from 'react'

export default function Button(props) {
  return ( 
    <div>
      <button className='mx-auto px-8  py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
        { props.text}
          </button>
    </div>
  )
}
