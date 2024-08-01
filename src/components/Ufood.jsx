import React from "react";
import { ReactComponent as Boy } from "./images/a.svg";
import { ReactComponent as Girl } from "./images/b.svg";
import { NavLink } from "react-router-dom";

const Ufood = () => {
    return (
        <div
            className="h-screen w-full flex items-center justify-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="w-full max-w-2xl h-auto md:h-[50%] xl:h-[80%] p-6 flex items-center flex-col border-white border-2 backdrop-blur-xl rounded-3xl">
                <h1 className="text-center text-2xl md:text-3xl mb-6 font-semibold tracking-wide underline">
                    Choose the Gender
                </h1>
                <div className="w-full  h-full flex flex-col items-center xl:flex-row justify-center gap-6 md:gap-10 pt-7 bg-teal-600 rounded-3xl">
                    <NavLink
                        to="./Boy"
                        className="flex flex-col items-center w-full md:w-[40%] h-auto cursor-pointer"
                    >
                        <Boy className="w-24 h-24 md:w-48 md:h-48 xl:w-56 xl:h-56" />
                        <h1 className="text-center text-xl md:text-4xl font-semibold text-yellow-400 ">
                            Male
                        </h1>
                    </NavLink>
                    <NavLink
                        to="./Girl"
                        className="flex flex-col items-center w-full md:w-[40%] h-auto cursor-pointer"
                    >
                        <Girl className="w-24 h-24 md:w-48 md:h-48 xl:w-56 xl:h-56" />
                        <h1 className="text-center text-xl md:text-4xl font-semibold text-yellow-400 ">
                            Female
                        </h1>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Ufood;
