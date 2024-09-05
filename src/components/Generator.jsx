import React from 'react'
import { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'


function Header(props){
  return(
    <div className='flex flex-col gap-4 '>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>
          {props.index}
        </p>
        <h4 className='font-semibold text-lg sm:text-2xl '>{props.title}
        </h4>
      </div>
      <p className='text-lg sm:text-medium mx-auto font-semibold'>
        {props.description}
      </p>
    </div>
  )
}

export default function Generator() {

  const[showModal,setShowModal]=useState(false)
  const[poison,setPoison]=useState('individual')
  const[muscles,setMuscles]=useState([])
  const[goals,setGoals]=useState('strength_power')
  //let showModal=false;
  function toggleModal(){
    setShowModal(!showModal);
  }
  return (
    <SectionWrapper header={"generate your workout"} 
    title={['it`s','huge','o`clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure'} />
      
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return(
          <button 
          onClick={()=>{
            setPoison(type)
          }}
          className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? ' border-blue-100' : ' border-blue-600')} key={typeIndex}>
            <p className='capitalize'>{type.replace('_'," ")}</p>
          </button>
        )
      })}
      </div>

      <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'}/>
      
      <div className='bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal}
        className='relative flex items-center justify-center'>
          <p>Select Muscle Groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div>modal</div>
        )}
      </div>
      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
      {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
        return(
          <button 
          onClick={()=>{
            setGoals(scheme)
          }}
          className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (scheme === goals ? ' border-blue-100' : ' border-blue-600')} key={schemeIndex}>
            <p className='capitalize'>{scheme.replace('_'," ")}</p>
          </button>
        )
      })}
      </div>

      
    </SectionWrapper>
  )
}
