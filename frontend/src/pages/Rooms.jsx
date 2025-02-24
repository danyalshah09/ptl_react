import React, { useState } from 'react';
import RoomCategories from "../ui_elements/RoomCategories";

const Rooms = () => {
  return (
    <>
    <div className="relative h-[600px] bg-[url('./assets/images/ptl_background.jpeg')] bg-cover bg-center bg-no-repeat ">
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/30"></div>
    {/* Content */}
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="text-center max-w-4xl px-4">
        
       
        
      </div>
      
    </div>
    
  </div>
  <RoomCategories/>

  </>
  );
};


export default Rooms;