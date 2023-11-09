import React from "react";
import TopNfts from "../components/TopNfts";

const LandingPage = () => {
    return (
        
        <div className=" top-0 w-full h-screen">
     
                
                <div className="w-full h-full">
                    {/* background */}
                    <div className="absolute z-10 h-full w-full ">
                        <div className="h-full w-full relative">
                            <div className="absolute z-10 h-full w-full bg-backLanding bg-cover  bg-no-repeat">
                               
                            </div>
                           
                        </div>
                    </div>
                    {/* logica */}
                    <div className="absolute z-50 h-full w-full ">
                        <div className="h-3/5 w-full  flex justify-end items-center flex-col">
                            <div className="w-full relative flex justify-center items-center ">
                                <p className="text-5xl font-bold bg-clip-text text-center ">
                                   Encuentra arte que te inspira con un solo click
                                </p>
                            </div>
                            <div className="w-full h-[45px] flex justify-center items-center pt-4">
                               <button className="rounded-full text-center bg-[#558564] h-[40px] w-[200px] items-center">Explorar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
               <TopNfts/>
          
    </div>
);
};

            
export default LandingPage;
