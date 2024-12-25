import React from "react";
import { IoChevronBackOutline, IoLogoDropbox } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import ViewImage from '../../assets/images/c2.jpg';
import ImageDiv from "../../components/ImageDiv";
import AppliedPeople from "./AppliedPeople";
import { FaRegStar } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { FaRegCopy } from "react-icons/fa6";
import Button from "../../components/button";

const Profile = () => {
    return (
        <>
            <div className="flex items-center justify-between mt-5 px-4">
                <IoChevronBackOutline />
                <p className="font-semibold">Bluemoon Studio</p>
                <HiDotsVertical />
            </div>
            <div className="relative mb-10">
                <img src={ViewImage} alt="" className="p-4 rounded-3xl w-full h-[200px] bg-cover" />
                <ImageDiv c='absolute -bottom-7 left-10 w-[100px] h-[100px] bg-blue-400 rounded-full border-2 border-white'>
                    <IoLogoDropbox className="w-[50px] h-[50px]" />
                </ImageDiv>
            </div>
            <h1 className="px-4 py-2 text-xl font-semibold">Looking for Backend Developer for Crypto Dashboard</h1>
            <p className="px-4 text-md font-semibold text-gray-400">Bluemoon Studio</p>
            <div className="p-4 flex items-center justify-between w-full">
                <div className="relative flex items-center justify-between w-[50%]">
                    <div>
                        <AppliedPeople />
                    </div>
                    <span className="float right-0 text-right">36+ Applied</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                    <FaRegStar />100% of 29k Reviews
                </div>
            </div>
            <hr className="border border-gray-400 mx-4" />
            <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center justify-center gap-2">
                    <FcApproval />Payment Verified
                </div>
                <div className="flex items-center">
                    <GrLocation className="bg-white w-8 h-8 p-2 rounded-full" />
                    <p className="text-sm">Kalasan, Sleman, DIY</p>
                </div>
            </div>
            <hr className="border border-gray-400 mx-4" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">Project Overview</h2>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores reprehenderit, harum labore et a dolorum ea magnam autem praesentium. Cum, sint. Libero cupiditate magnam quibusdam mollitia aliquid. Obcaecati veritatis nulla nam eligendi, beatae molestias harum dolore id rerum ad non deserunt ipsum, veniam eos laborum ex. Explicabo ducimus magnam eveniet. Tenetur labore non modi voluptates vel. Accusantium dolore, omnis cupiditate eligendi itaque eos consequatur quam soluta, a explicabo sit similique in sunt eveniet accusamus mollitia. Facilis, hic? Commodi nesciunt ullam minus ad ex sint, impedit nam quia, rerum temporibus amet. Sit possimus maxime quaerat in distinctio sunt? Consequuntur, officiis?</p>
                <div className="flex items-center justify-between p-2 w-full gap-2">
                    <FaRegCopy className="bg-gray-300 w-12 h-12 px-4 py-3 rounded-2xl" />
                    <Button tex="Submit a Proposal" />
                </div>
            </div>
        </>
    );
};

export default Profile;
