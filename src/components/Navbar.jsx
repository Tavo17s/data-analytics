import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <div className='flex justify-between items-center h-24px max-w-[1240px] mx-auto text-white'>
            <h1 className='m-4 w-full text-3xl font-bold text-[#00DFC0]'>
                React.
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div onClick={() => setToggle((prev) => !prev)} className="block md:hidden">
                {!toggle ? <AiOutlineClose size={30} className='mr-4' /> : <AiOutlineMenu size={30} className='mr-4' />}
            </div>

            <div className={!toggle ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00DFC0] m-4'>
                    React.
                </h1>
                <ul>
                    <li className='p-4 border-b border-gray-600'>HOME</li>
                    <li className='p-4 border-b border-gray-600'>COMPANY</li>
                    <li className='p-4 border-b border-gray-600'>RESOURCES</li>
                    <li className='p-4 border-b border-gray-600'>ABOUT</li>
                    <li className='p-4'>CONTACT</li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar