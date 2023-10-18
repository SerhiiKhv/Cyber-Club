import {Link} from "react-router-dom";
import LogoGif from "../../Assets/Logo/Logo.gif"

export const Header = () => {
    return (
        <header>
            <div className="px-6 py-2 flex justify-between bg-washedBlack">
                <div className="flex items-center gap-2">
                    <div className="bg-washedWhite rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                    </div>
                    <p className="text-sm text-washedWhite">КИЇВ | АДРЕСА</p>
                </div>

                <div className="flex space-x-4">
                    <div className="w-6 h-6 bg-washedWhite rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                    </div>

                    <div className="w-6 h-6 bg-washedWhite rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                        </svg>
                    </div>

                    <div className="w-6 h-6 bg-washedWhite rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
                        </svg>
                    </div>
                </div>

            </div>


            <div className="px-20 h-32 flex justify-between items-center bg-cardinGreen">

                <Link to={'/'}>
                    <div className="flex items-center gap-2">
                        <div>
                            <p className="text-lg text-center text-bristolBlue">Cyber</p>
                            <p className="text-lg text-center text-bristolBlue">Club</p>
                            <p className="text-lg text-center text-bristolBlue">Necron</p>
                        </div>
                        <img className="h-24 rounded-full" src={LogoGif}
                             alt="Logo"/>
                    </div>
                </Link>

                <div className="flex justify-between gap-10">
                    <Link to={'/'}>
                        <p className="text-lg text-bristolBlue">Головна</p>
                    </Link>

                    <Link to={'/price'}>
                        <p className="text-lg text-bristolBlue">Ціни</p>
                    </Link>

                    <Link to={'/aboutUs'}>
                        <p className="text-lg text-bristolBlue">Про нас</p>
                    </Link>

                    <Link to={'/photoClub'}>
                        <p className="text-lg text-bristolBlue">Фото галерея</p>
                    </Link>

                    <Link to={'/contacts'}>
                        <p className="text-lg text-bristolBlue">Контакти</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}