import React from "react";

const Card = ( {children, title} ) => {
    
    return (
        <div className="border-2 font-bold px-4 py-6 border-[#1B1B1B] bg-[#F8FFCF] rounded-md shadow-retro w-80 flex flex-col gap-4 font-mono text-[#1B1B1B]">
        {children}
        </div>
    );
};

export default Card;
