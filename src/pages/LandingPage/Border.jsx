import React from "react";

const Border=(props)=>{
    return (
        <div className={`absolute flex items-center justify-center rounded-full border border-dashed border-black ${props.w} ${props.h}`}>
        </div>
    )
}

export default Border