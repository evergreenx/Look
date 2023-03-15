import React from 'react'
import {GiSelfLove} from 'react-icons/gi'

function Footer() {
  return (
    <div className='my-4'>
      <a href="https://github.com/evergreenx" className='text-sm text-slate-400 flex items-center'>
        Made  with <GiSelfLove className='text-red-300 ml-2' /> </a> 
        {/* <a href="https://github.com/evergreenx" target="_blank" rel="noreferrer"> Evergreen </a> */}
    
    </div>
  )
}

export default Footer