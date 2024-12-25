import React from "react";
const ImageDiv = (data) => {
    return (
        <div className={`${data.c} text-white flex items-center justify-center`}>
            {data.children}
        </div>
    )
}
export default ImageDiv;