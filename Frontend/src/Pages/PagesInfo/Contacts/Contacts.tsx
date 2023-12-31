import map from "../../../Assets/Img/Map.png"

export const Contacts = () => {
    return (
        <div className="bg-price text-white p-8">
            <h1 className="text-6xl text-center p-6">Контакти</h1>

            <div className="flex justify-between gap-10">
                <div>
                    <img className="p-8 w-4/5" src={map} alt={"Loading..."}/>
                </div>

                <div className="items-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p>Київ .....адреса</p>
                </div>

                <div className="items-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                    </svg>
                    <div>
                        <p>+38098******</p>
                        <p>+38098******</p>
                    </div>
                </div>
            </div>


        </div>
    )
}