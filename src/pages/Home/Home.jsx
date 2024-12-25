import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import image from '../../assets/images/icon2.jpg';
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import Button from "../../components/button";
import { MdDashboard } from "react-icons/md";
import { IoPieChartSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { BiLogoJquery } from "react-icons/bi";
import Cards from "./Cards";


const Home = () => {
    return (
        <>
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center justify-center gap-1">
                    <BiLogoJquery className="w-8 h-8 text-blue-500" />
                    <p className="font-semibold">Lowcer</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <div className=" relative">
                        <IoMdNotificationsOutline className="w-6 h-6">
                        </IoMdNotificationsOutline>
                        <div className="bg-red-500 rounded-full px-1 absolute top-0 right-0 text-[8px] text-white">2</div>
                    </div>
                    <img className="w-10 h-10 rounded-full" src={image} alt="" />
                </div>
            </div>
            <div className="px-2 w-full">
                <div className="relative w-full bg-gray-200 rounded-full p-3 flex items-center gap-1 border border-gray-300">
                    <input type="text" name="" id="" className="pl-2 w-full bg-transparent border border-none outline-none" placeholder="Search type job"/>
                    <CiSearch className="bg-white w-9 h-9 p-2 rounded-full"/>
                </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-5 px-2">
                <div className="relative w-full bg-gray-200 rounded-full p-3 flex items-center gap-1 border border-gray-300">
                    <input type="text" name="" id="" className="pl-2 w-full bg-transparent border border-none outline-none" placeholder="Job type.."/>
                    <HiOutlineShoppingBag className="bg-white w-9 h-9 p-2 rounded-full"/>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full p-3 flex items-center gap-1 border border-gray-300">
                    <input type="text" name="" id="" className="pl-2 w-full bg-transparent border border-none outline-none" placeholder="Location..."/>
                    <GrLocation className="bg-white w-9 h-9 p-2 rounded-full"/>
                </div>
            </div>
            <div className="flex items-center justify-center px-2 mt-5">
                <Button tex="Search"/>
            </div>
            <div className="bg-gray-300 rounded-2xl w-full px-2 pt-2 flex flex-col items-center gap-2 mt-5">
                <div className="flex items-center justify-center gap-2 bg-white rounded-full py-2 px-2 text-[13px]">
                    <div className="py-2 px-5 hover:bg-black hover:text-white rounded-full">Recent Jobs</div>
                    <div className="py-2 px-5 hover:bg-black hover:text-white rounded-full">Popular Jobs</div>
                    <div className="py-2 px-5 hover:bg-black hover:text-white rounded-full">Adobe photoshop</div>
                </div>
                <Cards/>
            </div>
            <div className="fixed bottom-0 w-full bg-white p-2 flex items-center justify-between px-4">
                <MdDashboard className="w-8 h-8 rounded-full p-1"/>
                <CiSearch className="w-8 h-8  rounded-full p-1"/>
                <IoPieChartSharp className="w-8 h-8  rounded-full p-1"/>
                <IoMdTime className="w-8 h-8  rounded-full p-1"/>
                <img className="w-8 h-8 rounded-full p-1" src={image} alt="" />
            </div>
        </>
    );
};

export default Home;

