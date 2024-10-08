import React from 'react'


export default function SectionWrapper(props) {
  const{id}=props
  //  const{children,title,header}=props
  return (
    <section  id={id} className='min-h-screen flex flex-col gap-10'>
      <div className='bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center'>
      <p className='uppercase font-medium '>{props.header} {/* header */}</p>
      <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  ' >{props.title[0]} <span className='uppercase text-blue-400'>{props.title[1]}</span>  {props.title[2]} {/* title */}</h2>
      </div>
      <div 
      className='max-w-[800px] w-full flex flex-col mx-auto gap-10
      '>
        {props.children}
      </div>
    </section>
  )
}
