import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect,useState } from 'react'
function NavBar() {
   
    const menuShow = ()=>{
        const elementt = document.getElementById('hidden-dialog');
        elementt.classList.toggle('hidden');
    }
    const menuHide = ()=>{
        const elementt = document.getElementById('hidden-dialog');
        
       
          elementt.classList.toggle('hidden');
      
      }

  return (
    
   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img src={logo} className='mx-2 w-10' alt="logo" />
    </div>
    <div className='m-8 hidden md:flex items-center justify-center gap-4 text-2xl ' >
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
        <FaFacebook />
        <FaSquareXTwitter />
        <FaInstagram />

    </div>
    <button className='text-3xl md:hidden m-8' onClick={()=>menuShow()}>
    <IoMenuSharp  />
    </button>
    <div  id='hidden-dialog' className="absolute top-0 left-0 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] hidden " >

    <div className='nav-bar flex justify-between mb-10 py-6 m-9'>
    <div className="flex flex-shrink-0 items-center">
    <img src={logo} className='mx-2 w-10' alt="logo" />
    </div>
    <button className='text-3xl' onClick={()=>menuHide()}>
    <RxCross1 />
    </button>
    </div>
    <div className='text-3xl ml-9'>
        <h2>Connect With me</h2>
        <div className='text-xl mt-10 flex flex-col'>
            <a href="" className='flex items-center  mt-2'>LinkedIn  <div className='ml-2'><FaLinkedin></FaLinkedin></div></a>
            <a href="" className='flex items-center  mt-2'>GitHub <div className='ml-2'><FaGithub /></div></a>
            <a href="" className='flex items-center  mt-2'>Facebook<div className='ml-2'><FaFacebook /></div></a>
            <a href="" className='flex items-center  mt-2'>Twitter<div className='ml-2'><FaSquareXTwitter /></div></a>
            <a href="" className='flex items-center  mt-2'>Instagram  <div className='ml-2'><FaInstagram /></div></a>
        </div>
    </div>
    </div>
   </nav>
  )
}

export default NavBar