import React from "react"

const CardArtist =()=>{
    return(
        <>
        <div className="w-full h-full p-4">
            <div className="w-[326px] h-[170px] grid grid-rows-2">
                <div className="w-full h-[100px] bg-[#09724A] flex items-center justify-center">
                    <h1 className="text-center text-white font-medium">Username</h1>
                </div>
                <div className="w-full h-[71px] bg-[#9E9E9E] flex items-center ">
                    <p className="font-medium text-white ml-4">Seguidores 123</p>
                    <button className="rounded-xl bg-white w-24 h-10 ml-20">Seguir</button>
                </div>

            </div>

        </div>
        </>
    )
}

export default CardArtist