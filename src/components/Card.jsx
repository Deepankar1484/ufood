import React from "react";
import breakfastImage from "./images/breakfast.png";
import lunchImage from "./images/lunch.png";
import snacksImage from "./images/snacks.png";
import dinnerImage from "./images/dinner.png";
const Card = ({ d, time }) => {
    let imageSrc;
    switch (time) {
        case "Breakfast":
            imageSrc = breakfastImage;
            break;
        case "Lunch":
            imageSrc = lunchImage;
            break;
        case "Snacks":
            imageSrc = snacksImage;
            break;
        case "Dinner":
            imageSrc = dinnerImage;
            break;
        default:
            imageSrc = null;
            break;
    }
    return (
        <div className="mb-3 px-5 py-3 flex items-center justify-start gap-x-5 bg-gray-700 rounded-2xl">
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={time}
                    className="w-16 h-16 object-cover"
                />
            )}
            <div className="">
                <h1 className="text-xl md:text-3xl text-orange-600 font-semibold">
                    {time}
                </h1>
                {Array.isArray(d)
                    ? d.map((item, index) => (
                          <span key={index} className="text-sm md:text-xl text-white">
                              {item + ", "}
                          </span>
                      ))
                    : d}
            </div>
        </div>
    );
};

export default Card;
