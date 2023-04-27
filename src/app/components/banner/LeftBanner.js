"use client"
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Wago System Integrator.", "Industrial Automation.", "IIoT."," Smart Historian." ,"Control Panel." ,"  Home Automation Solutions." ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 p-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO </h4>
        <h1 className="text-6xl font-bold text-white">
          <span className="text-designColor capitalize">K</span>ETSOL
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-neutral-400">
        Team KETSOL is a Wago System Integrator. The team offers excellence in Industrial Automation, IIoT, Smart Historian, Control Panel, Home Automation Solutions. And with constant skill enhancement, the team is constantly exposed to advanced quality control initiatives including the use of IT. Our efficient service over the years has helped us gain the reliance of our esteemed client.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              
            </span>
            <span className="bannerIcon">
              
            </span>
            <span className="bannerIcon">
             
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>

        </div>
      </div>
    </div>
  );
}

export default LeftBanner