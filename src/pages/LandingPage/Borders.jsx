import React from "react";
import ImageDiv from "../../components/ImageDiv";
import Border from "./Border";
import { IoLogoAppleAr } from "react-icons/io5";
import { BiLogoFirebase, BiLogoFlutter, BiLogoGitlab, BiLogoMagento } from "react-icons/bi";

const Borders=()=>{
    return(
        <div className="relative flex items-center w-[350px] justify-center h-[400px] overflow-hidden" >
            <Border w="w-[350px]" h="h-[350px]"/>
            <Border w="w-[290px]" h="h-[290px]"/>
            <Border w="w-[230px]" h="h-[230px]"/>
            <Border w="w-[180px]" h="h-[180px]"/>
            <div className="relative w-full h-full flex items-center justify-center">
                <ImageDiv c='w-20 h-20 bg-blue-400 rounded-lg'>
                    <IoLogoAppleAr className="w-10 h-10" />
                </ImageDiv>
                <ImageDiv c='absolute top-[100px] right-[30px] w-[50px] h-[50px] bg-green-400 rounded-lg'>
                    <BiLogoFirebase className="w-10 h-10" />
                </ImageDiv>
                <ImageDiv c='absolute top-[30px] left-[100px] w-[50px] h-[50px] bg-red-400 rounded-lg'>
                    <BiLogoFlutter className="w-10 h-10" />
                </ImageDiv>
                <ImageDiv c='absolute bottom-[100px] left-[30px] w-[50px] h-[50px] bg-blue-400 rounded-lg'>
                    <BiLogoGitlab className="w-10 h-10" />
                </ImageDiv>
                <ImageDiv c='absolute bottom-[100px] right-[50px] w-[50px] h-[50px] bg-purple-400 rounded-lg'>
                    <BiLogoMagento className="w-10 h-10" />
                </ImageDiv>
            </div>
        </div>
    )
}


export default Borders;