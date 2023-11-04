// @ts-ignore
import videoBackground from "../../Assets/VideoBackground/VideoBackgroundMainPage.mp4";
import React from "react";

export const VideoElement = () => {
    return(<div className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted className="w-full object-cover">
            <source src={videoBackground} type="video/mp4"/>
            Ваш браузер не підтримує відео.
        </video>
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-3xl font-bold">Necron Cyber Club</h1>
            <p className="text-lg">Новітній кіберспортивний клуб у Києві</p>
        </div>
    </div>)
}