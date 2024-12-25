import React from "react";
import {buttonBgColor} from '../assets/themes/buttonTheme'
const Button=(data)=>{
    return(
        <button  className={`${buttonBgColor} w-full p-4 rounded-full font-semibold text-white hover:bg-blue-600`}>
            {data.tex}
        </button>
    )
}
export default Button;