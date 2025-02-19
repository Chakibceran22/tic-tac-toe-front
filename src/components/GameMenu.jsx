import React from 'react'
import logo from '../assets/images/logo.svg' 
import x from '../assets/images/icons/icon-x-grey.svg'
import o from '../assets/images/icons/icon-o-grey.svg'


const GameMenu = () => {
    return (
    <div className=" min-h-screen w-full flex flex-col justify-center items-center">
        <img src={logo} alt="SVG Image" />
        <div className='mx-0 my-10 p-[24px_24px_29px] text-center bg-[#253B48] shadow-[inset_0px_-8px_0px_#10212A] rounded-[15px] w-md'>
            <h1 className='text-[1.2rem] leading-[20.16px] font-bold pl-[2px] text-[#A8BFC9] mb-[15px]'>PICK PLAYER 1’S MARK</h1>
            <div className='my-[24px_0_18px] h-22 px-2 py-5 bg-[#1F3641] relative flex items-center justify-center rounded-[10px] w-full'>
                <div className=' flex items-center justify-center m-1 w-md h-[72px] bg-[#DBE8ED] rounded-[10px]'>
                    <img src={x} alt="SVG image" className='w-[32px]' />
                </div>
                <div className=' flex items-center justify-center m-1  w-md h-[72px] bg-[#DBE8ED] rounded-[10px]'>
                    <img src={o} alt="SVG image" className='w-[32px]' />
                </div>
            </div>
        </div>
      </div>
      
    )
}
export default GameMenu