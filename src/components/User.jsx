import React, { useContext, useEffect, useState } from "react";
import Ufoodcontext from "../context/Ufoodcontext";
import Card from "./Card";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const fetchdata = async (endpoint, day, day2, setToday, setTomorrow, setActual, setLoading, setError) => {
    try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Network response was not ok");
        const actualdata = await res.json();
        setToday(actualdata[day]);
        setTomorrow(actualdata[day2]);
        setActual(actualdata[day]);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

const User = () => {
    const { fname, gname } = useParams();
    const { today, tomorrow, setToday, setTomorrow, actual, setActual } =
        useContext(Ufoodcontext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    let x = new Date();
    let day = x.getDay();
    let day2 = (day + 1) % 7;
    
    useEffect(() => {
        if (fname === "Boy") {
            fetchdata("/btt.json", day, day2, setToday, setTomorrow, setActual, setLoading, setError);
        } else if (fname === "Girl") {
            fetchdata("/gtt.json", day, day2, setToday, setTomorrow, setActual, setLoading, setError);
        }
    }, [fname, day, day2, setToday, setTomorrow, setActual]);

    useEffect(() => {
        setLoading(true);
        if (gname === "Today") {
            setActual(today);
        } else if (gname === "Tomorrow") {
            setActual(tomorrow);
        }
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [gname, today, tomorrow, setActual]);

    if (loading)
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <Loading />
            </div>
        );
    if (error) return <div className="error">{error}</div>;
    return (
        <>
            <div className="h-screen bg-amber-600">
                <h1 className="w-full bg-black text-white py-4 text-center font-semibold underline text-4xl">
                    {gname ? gname : "Today"}'s Menu
                </h1>
                <div className=" p-5">
                    <h1 className="text-center font-semibold text-3xl py-3 hidden md:block">
                        {fname}'s TimeTable for the mess
                    </h1>
                    <div className="w-full max-w-md mx-auto grid-rows-4 ">
                        <Card
                            d={actual?.breakfast || "no actual"}
                            time="Breakfast"
                        />
                        <Card d={actual?.Lunch || "no actual"} time="Lunch" />
                        <Card d={actual?.snacks || "no actual"} time="Snacks" />
                        <Card d={actual?.dinner || "no actual"} time="Dinner" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default User;
