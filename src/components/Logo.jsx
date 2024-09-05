import React from 'react'
import logo from '../assets/logo (2).png';

function Logo({width = '100px'}) {
  return (
    <>
    <img src={logo} alt="Logo" className='w-11'/>
    </>
  )
}

export default Logo