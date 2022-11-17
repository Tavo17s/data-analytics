import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["BTB", "SASS", "BTC"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='font-poppins'>
            <div className='text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='uppercase text-[#00DFC0]'>
                    Growing with data analytics
                </p>
                <h1 className='md:text-6xl sm:6xl text-4xl font-bold mt-1 mb-1'>
                    Grow with data.
                </h1>
                <div className='py-4 flex justify-center items-center '>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Fast flexible financing for</p>
                    <span className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' ref={el}></span>
                </div>
                <p className={`md:text-2xl text-xl font-bold text-gradient`}>
                    Monitor your data analytics to increase revenue for BTB, SASS & BTC platforms.
                </p>
                <button className='bg-green-gradient w-[200px] rounded font-medium my-6 mx-auto px-6 py-3 text-black'>
                    Get started
                </button>
            </div>
        </div>
    )
}

export default Hero