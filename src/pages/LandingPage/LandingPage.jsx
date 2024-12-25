import React from "react";
import Borders from "./Borders";
import Button from "../../components/button";

const LandingPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Borders/>
            <div className="flex flex-col items-center justify-center text-center w-full">
                <h1 className="font-bold text-2xl p-8">Find a suitable job in seconds with our advanced search features🚀</h1>
                <p className="px-4 pb-4 text-sm">Explore thousands of exciting jobs from leading companies around the world. Lowceris your trusted partner in fnding jobs</p>
                <div className="w-full px-2">
                    <Button tex="Submit a Proposal"/>
                </div>
            </div>
        </div>
    );
};
export default LandingPage;
