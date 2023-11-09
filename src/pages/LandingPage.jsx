import React from "react";

const LandingPage = () => {
    return (
        
        <div className="fixed top-0 w-full h-full h-screen">
        <div className="h-full w-full overflow-hidden">
            {/*   */}
            <div className="w-full h-full ">
                
                <div className="w-full h-full relative overflow-hidden">
                    {/* background */}
                    <div className="absolute z-10 h-full w-full ">
                        <div className="h-full w-full relative">
                            <div className="absolute z-10 h-full w-full bg-backLanding bg-cover  bg-no-repeat">
                               
                            </div>
                            <div className="absolute w-full h-full z-20 flex items-end">
                                <div className="w-full h-[50%]">
                                    
                                </div>
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
               
            </div>
        </div>
    </div>
);
};

            
export default LandingPage;
