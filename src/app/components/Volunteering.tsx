import React, { useEffect, useRef } from 'react';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import ImageText from '../componentCards/ImageText';
import gdsc from "../../../public/gdsc.jpeg";
import risc from "../../../public/risc.jpeg";

function Volunteering() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && lineRef.current) {
        lineRef.current.style.height = `${containerRef.current.clientHeight}px`;
      }
    };

    // Initial update
    handleResize();

    // Create a ResizeObserver to handle dynamic content changes
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="md:p-6 p-0">
      <h1 className="font-[Times] text-3xl mb-5">Volunteering</h1>
      <div className="relative" ref={containerRef}>
        <div className="absolute left-0 top-0 border-l-2 border-black" ref={lineRef}></div>
        <br /><br />
        <div className="flex items-center">
          <div className="relative flex items-center">
            <div className="w-8 border-t-2 border-black"></div>
            <MdOutlineHorizontalRule className="text-black -ml-4" />
          </div>
          <a href='https://gdsc.community.dev/rmit-university-melbourne-australia/' target='_blank' className='font-[Times] text-lg ml-2'>
            <ImageText imageSrc={gdsc.src} text="GDSC RMIT" IconEl={'symbol'} />
            </a>
        </div>
        <p className="text-sm text-gray-600 pl-8 mb-8">Dec &apos;23 - Present</p>

        <div className=" flex items-center">
          <div className="relative flex items-center">
            <div className="w-8 border-t-2 border-black"></div>
            <MdOutlineHorizontalRule className="text-black -ml-4" />
          </div>
          <a href='https://www.facebook.com/rmitinfosec/' target='_blank' className='font-[Times] text-lg ml-2'>
            <ImageText imageSrc={risc.src} text="RISC RMIT" IconEl={'symbol'} />
            </a>
        </div>
        <p className="text-sm text-gray-600 pl-8 mb-8">Nov &apos;23 - Present</p>
      </div>
    </div>
  );
}

export default Volunteering;
