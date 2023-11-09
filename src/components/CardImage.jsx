import React from "react";
import { images } from "../assets/INDEX.JS";

const CardImage = () => {
    return (
        <>
            <div className="w-full h-full p-4">
                <div className="">
                    <div className="w-[232px] h-[321px] grid-rows-2">
                        <div className="h-[calc(100%-97px)] w-[232px] grid grid-cols-2 ">
                            
                                <div className="h-full w-[175px] ">
                                    <img src={images.jaguar} className="h-full w-[175px] object-cover  "></img>
                                </div>
                                <div className="w-[57px] h-full ml-[59px] bg-[#09724A] flex items-center justify-center">
                                    <h1 className=" text-center text-white rotate-[-90deg]">DISPONIBLES  12 / 346</h1>
                                </div>
                           
                        </div>
                        <div>
                            <div className="w-full h-[97px] bg-black text-white" >
                                <div>
                                    <p className="p-2 font-medium">DEVFX</p>
                                    <div className="p-2 flex row-span-3">
                                   
                                        <p className="font-medium">Artista</p>
                                    <p className="px-20 font-extrabold">$500</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardImage