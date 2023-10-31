import React from 'react';
// @ts-ignore
import videoBackground from '../Assets/VideoBackground/VideoBackgroundMainPage.mp4';
import supportCompany from '../Assets/Img/SupportCompany.png'
import photo1 from '../Assets/PhotoClub/1.jpeg'
import photo2 from '../Assets/PhotoClub/2.jpg'
import photo3 from '../Assets/PhotoClub/3.jpg'
import photo4 from '../Assets/PhotoClub/4.jpg'
import photo5 from '../Assets/PhotoClub/5.jpeg'
import {Link} from "react-router-dom";
import {Contacts} from "./PagesInfo/Contacts/Contacts";


export const MainPage = () => {
    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                <video autoPlay loop muted className="w-full object-cover">
                    <source src={videoBackground} type="video/mp4"/>
                    Ваш браузер не підтримує відео.
                </video>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                    <h1 className="text-3xl font-bold">Necron Cyber Club</h1>
                    <p className="text-lg">Новітній кіберспортивний клуб у Києві</p>
                </div>
            </div>


            <div>
                <img src={supportCompany} alt={"Loading..."}/>

                <div className="grid grid-cols-5 relative">
                    <img src={photo1} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                    <img src={photo2} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                    <img src={photo3} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                    <img src={photo4} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                    <img src={photo5} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                </div>

                <div className="grid grid-cols-2 gap-2 p-4">
                    <div>
                        <img src={photo1} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                    </div>

                    <div className="text-center flex items-center justify-center">
                        <div className="">
                            <h1 className="font-bold text-2xl">ГРАЛЬНИЙ ПРОСТІР НОВОГО ПОКОЛІННЯ</h1>

                            <div className="flex items-center justify-center">
                                <Link to={'/price'}>
                                    <p className="m-4 text-lg text-white w-80 border-4 rounded-2xl border-bristolBlue bg-black">Докладніше про ціни</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-denim text-white">
                    <div>
                        <h1 className="p-6 text-center font-bold text-4xl">
                            ВЕЛИКИЙ ВИБІР ІГОР НА БУДЬ-ЯКИЙ СМАК
                        </h1>

                        <div className="grid grid-cols-6">
                            <img src={photo1} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo2} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo3} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo4} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo5} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo5} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                        </div>
                    </div>

                    <div>
                        <h1 className="p-4 text-center font-bold text-2xl">
                            Випробуй усі сучасні тайтли на максимальних налаштуваннях у комп'ютерному клубі Necron!
                        </h1>

                        <div className="grid grid-cols-6">
                            <img src={photo1} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo2} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo3} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo4} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo5} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                            <img src={photo5} alt={"Loading..."} className='h-96 w-full object-cover object-center'/>
                        </div>
                    </div>

                    <h1 className="p-4 text-center font-bold text-2xl">
                        І це ще не все… Ми постійно доповнюємо нашу
                        бібліотеку ігор новинками та побажаннями відвідувачів.
                    </h1>

                    <div className="flex items-center justify-center">
                        <Link to={'/contacts'}>
                            <p className=" text-center m-4 text-lg text-white w-80 border-4 rounded-2xl border-bristolBlue bg-black">Забронювати</p>
                        </Link>
                    </div>
                </div>
            </div>


            <Contacts />
        </div>
    );
};
