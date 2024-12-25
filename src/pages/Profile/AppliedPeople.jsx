import React from "react";
import image from '../../assets/images/icon2.jpg';
import image2 from '../../assets/images/profile2.jpeg';
import image3 from '../../assets/images/profile3.jpeg';

const AppliedPeople=()=>{

    const Peoples=[
        {
            img:image,
            position:"left-0"
        },
        {
            img:image2,
            position:"left-3"
        },
        {
            img:image3,
            position:"left-6"
        },
        {
            img:image2,
            position:"left-9"
        },
    ]
    return(
        Peoples.map((Img,index)=>(
            <img key={index} src={Img.img} className={`absolute top-0 ${Img.position}  w-7 h-7 rounded-full border border-white`} alt="" />
        ))
    )
}



export default AppliedPeople;