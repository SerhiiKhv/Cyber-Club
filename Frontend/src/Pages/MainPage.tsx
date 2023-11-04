import React from 'react';
import {Link} from "react-router-dom";
import {Contacts} from "./PagesInfo/Contacts/Contacts";
import {VideoElement} from "./ElementsPage/VideoElement";
import {ImgElement} from "./ElementsPage/ImgElement";

//Photos:
import supportCompany from '../Assets/Img/SupportCompany.png'

//Cyber club photos
import photo1 from '../Assets/PhotoClub/1.jpeg'
import photo2 from '../Assets/PhotoClub/2.jpg'
import photo3 from '../Assets/PhotoClub/3.jpg'
import photo4 from '../Assets/PhotoClub/4.jpg'
import photo5 from '../Assets/PhotoClub/5.jpeg'

//Top game
import Minecraft from '../Assets/Game/Minecraft.png'
import GTA5Img from '../Assets/Game/GTA.jpg'
import RDR2 from '../Assets/Game/RDR2.jpg'
import ResidentEvil from '../Assets/Game/ResidentEvilVillage.jpg'
import MetroExodus from '../Assets/Game/MetroExodus.jpg'
import TheWitcher3 from '../Assets/Game/TheWitcher3.jpg'

//Online game
import GenshinImpact from '../Assets/Game/GenshinImpact.jpg'
import CS2 from '../Assets/Game/cs2.jpg'
import Dota2 from '../Assets/Game/Dota2.jpg'
import PUBG from '../Assets/Game/PUBG.jpg'
import Fifa from '../Assets/Game/FIFA.jpeg'
import WorldOfTanks from '../Assets/Game/WorldOfTanks.jpg'

export const MainPage = () => {
    return (
        <div>
            <VideoElement />

            <div>
                <img src={supportCompany} alt={"Loading..."} className="w-full"/>

                <ImgElement
                    images={[photo1, photo2, photo3, photo4, photo5]}
                    size={5}
                    classNameComponent="grid grid-cols-5 relative"
                    classNameImg="h-96 w-full object-cover object-center"
                /> {/*Cyber club photos*/}

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

                        <ImgElement
                            images={[Minecraft, GTA5Img, RDR2, ResidentEvil, MetroExodus,TheWitcher3]}
                            size={6}
                            classNameComponent="grid grid-cols-6"
                            classNameImg="h-96 w-full object-cover object-center"
                        />{/*Top game*/}
                    </div>

                    <div>
                        <h1 className="p-4 text-center font-bold text-2xl">
                            Випробуй усі сучасні тайтли на максимальних налаштуваннях у комп'ютерному клубі Necron!
                        </h1>

                        <ImgElement
                            images={[Dota2, CS2, GenshinImpact, PUBG, Fifa,WorldOfTanks]}
                            size={6}
                            classNameComponent="grid grid-cols-6"
                            classNameImg="h-96 w-full object-cover object-center"
                        />{/*Online game*/}
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