import React from 'react'
import bannerImg from '../assets/img/banner.png'
import Storebutton from '../assets/img/Storebutton.png'
import Applebutton from '../assets/img/Applebutton.png'
import fbIcon from '../assets/img/fbIcon.png'
import XIcon from '../assets/img/XIcon.png'
import instaIcon from '../assets/img/instaIcon.png'
const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFFFFF] to-[#EAD9B7]'>
        <div className='max-w-7xl mx-auto'>
        <div className='flex md:flex-row flex-col items-center'>
      <div className='place-items-center'>
        <h1 className='md:text-[70px] text-[32px] font-bold'>Caring for Curls <br/> Coils & Culture</h1>
        <p className='md:text-[20px] text-[16px] font-medium text-black/60 w-70/100'>Unlock the secret to healthy, vibrant hair with products designed for Nigerian People — infused with nature, backed by science, and made with love.</p>
        <div className='flex gap-4 items-center pt-6'>
            <img src={Storebutton} alt="Storebutton" className='md:w-[187px] w-[127px] h-[56px]'/>
            <img src={Applebutton} alt="Applebutton" className='md:w-[187px] w-[127px] h-[56px]'/>
        </div>
        <div className='flex gap-4 items-center pt-4 pb-12 '>
            <img src={fbIcon} alt="fbIcon" className=''/>
            <img src={XIcon} alt="XIcon" className=''/>
            <img src={instaIcon} alt="instaIcon" className=''/>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt=" banner image" className='md:max-w-none max-w-full' />
      </div>
    </div>
    </div>
    </div>
    
    
  )
}

export default Banner
