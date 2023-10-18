import React from "react";

export const Price = () => {

    function createTableElement(text1: string, text2: string, text3: string){
        return (
            <div className="border-4 text-white border-bristolBlue px-8 py-2 grid grid-cols-[2fr_1fr_1fr]">
                <p className="">{text1}</p>
                <p className="">{text2}</p>
                <p className="">{text3}</p>
            </div>
        )
    }

    return (
        <div className="bg-price h-full p-8">
            <div className="text-lg text-bristolBlue mx-12 px-8 py-4 flex justify-between bg-black h-full">
                <p className="text-pacificblue">CYBER ZONE</p>
                <p>PS4 ZONE</p>
                <p>PS5 ZONE</p>
                <p>LOUNGE ZONE</p>
                <p>НАСТІЛЬНИЙ ТЕНІС</p>
            </div>
            <div className="mx-12 bg-black h-full">
                {createTableElement("Час",               "Pro",     "Vip")}
                {createTableElement("30хв",              "30 грн",  "40 грн")}
                {createTableElement("1 година",          "60 грн",  "80 грн")}
                {createTableElement("3 години",          "160 грн", "220 грн")}
                {createTableElement("5 годин",           "220 грн", "300 грн")}
                {createTableElement("День (8:00-22:00)", "350 грн", "450 грн")}
                {createTableElement("Ніч (22:00-8:00)",  "250 грн", "300 грн")}
                {createTableElement("Доба",              "500 грн", "600 грн")}
                {createTableElement("місяць",            "6000 грн","8000 грн")}
            </div>
        </div>
    )
}