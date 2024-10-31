"use client";

import next from "next";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import udit from "../../../public/udit.jpeg";
import aura from "../../../public/aura.png";

function About() {
  return (
    <>
    <div className="h-[100vh] w-[100%] flex justify-center items-center text-white">
        <Image
            src={aura}
            className=" absolute z-[-1] w-[100%] h-[100vh]"
            alt="Bg Image"
        />
    <div>
    <div className="flex justify-center items-center">
    <Image
      src={udit}
      className="md:w-[10vw] w-[30vw] md:h-[10vw] h-[30vw]  rounded-full bg-blue-500 p-1 self-center"
      alt="Udit"
    />
    </div>
    <div className="mt-4 flex justify-center items-center">
        <h1 className="font-[Times] text-3xl">Hi, I am Udit</h1>
    </div>
    <div className="flex justify-center items-center">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'I\'m a Software Developer',
            1000,
            'I\'m a Tech Enthusiast',
            1000,
          ]}
          speed={50}
          className="text-2xl w-[50vw] text-center align-center"
          repeat={Infinity}
        />
    </div>
    </div>
    </div>
    </>
  );
}

export default About;