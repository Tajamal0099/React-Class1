import React from "react";
import ImageDiv from "../../components/ImageDiv";
import { IoLogoEdge, IoLogoDropbox , IoLogoDribbble } from "react-icons/io5";
import { FcApproval } from "react-icons/fc";
import { Rate } from 'antd';
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";

const Cards=()=>{

    const Card=[
        {
            CardLogo:<ImageDiv c='w-[50px] h-[50px] bg-orange-400 rounded-lg'>
                        <IoLogoEdge className="w-10 h-10"/>
                    </ImageDiv>, 
            CardTitle:"Create Packaging Design for...",
            CardSubTitle:"Fireart Studio",
            CardTags:["Figma","Branding","Adobe Photoshop"]
        },
        {
            CardLogo:<ImageDiv c='w-[50px] h-[50px] bg-blue-400 rounded-lg'>
                        <IoLogoDropbox className="w-10 h-10"/>
                    </ImageDiv>,
            CardTitle:"Create Packaging Design for...",
            CardSubTitle:"Fireart Studio",
            CardTags:["Figma","Branding","Adobe Photoshop"]
        },
        {
            CardLogo:<ImageDiv c='w-[50px] h-[50px] bg-green-400 rounded-lg'>
                        <IoLogoDribbble className="w-10 h-10"/>
                    </ImageDiv>,
            CardTitle:"Create Packaging Design for...",
            CardSubTitle:"Fireart Studio",
            CardTags:["Figma","Branding","Adobe Photoshop"]
        }
    ]



    return(
        <>
            {Card.map((item,index)=>(
                <div key={index} className="bg-white rounded-xl px-2 py-2 w-full flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        {item.CardLogo}
                        <div className="flex flex-col justify-center gap-1">
                            <p className="font-bold text-md">{item.CardTitle}</p>
                            <p className="text-xs">{item.CardSubTitle}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {item.CardTags.map((tag,TagIndex)=>(
                            <div key={TagIndex} className="px-3 rounded-md bg-gray-300">{tag}</div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-center gap-2">
                            <FcApproval/>Payment Verified
                        </div>
                        <Rate allowHalf defaultValue={2.5}/>
                    </div>
                    <hr className="border border-gray-300"/>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FaRegHeart />
                            <FaRegBookmark/>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-gray-300">1 Hour Ago</p>
                            <a href="#" className="text-blue-600">View Details</a>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}


export default Cards;