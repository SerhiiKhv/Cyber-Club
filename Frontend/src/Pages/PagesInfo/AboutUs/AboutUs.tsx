export const AboutUs = () => {
    return (
        <div className="bg-price h-screenp p-8">

            <div className="p-10 m-20 text-white bg-black">
                <h1 className="text-3xl py-2 text-center">Про нас</h1>
                <p className="py-6">
                    Чи можна по-справжньому поринути у світ кібер спорту
                    сидячи вдома? Ні звичайно! Cyber Club Necron надає Вам унікальну
                    можливість провести час у компанії однодумців та отримати
                    незабутні емоції.
                </p>

                <div className="flex justify-between text-center items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <h1 className="text-2xl">24/7</h1>
                        <p>Наш клуб відкритий 7 днів на тиждень 24 години на добу.</p>
                    </div>


                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round"
                                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/>
                        </svg>

                        <h1 className="text-2xl">Обладнання</h1>
                        <p>Сучасні комп'ютери — гра без гальм.</p>
                    </div>


                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round"
                                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
                        </svg>

                        <h1 className="text-2xl">Ціноутворення</h1>
                        <p>Демократична цінова політика.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}