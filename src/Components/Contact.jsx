import React from 'react'
import {CONTACT} from '../constants'
function Contact() {
    
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='text-4xl text-center my-10'>Get in Touch </h1>
        <div className='text-center tracking-tight'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact