import next from "next";
import { StaticImageData } from "next/image";
import React from "react";

const ImageText = ({ imageSrc,IconEl, text }: { imageSrc: string , IconEl: React.ElementType, text: string }) => {
  return (
    <>
    <div className="flex items-center">
      
      {
        IconEl==='symbol' && <img src={imageSrc} alt="Icon" className="h-5 w-5 md:h-8 md:w-8 mr-2" />
      }
      <h1 className="my-0 py-0">{text}</h1>
      {
        IconEl && <IconEl className='size-6' />
      }
    </div>
    </>
  );
};

export default ImageText;
