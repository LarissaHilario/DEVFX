import React from "react";
import CardImage from "./CardImage";

const TopNfts = () =>{
    return(
        <>
        <div className="w-full h-screen">
            <div className="grid grid-cols-3 gap-4">
                <CardImage></CardImage>
            </div>
        </div>
        </>
    )
}

export default TopNfts