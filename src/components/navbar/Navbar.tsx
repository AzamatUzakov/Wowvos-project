import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";
import { FiFilter, FiHome } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.css"


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)



    return (
        <div>


            <nav className={`h-screen bg-[#2E2E2E] ${isOpen ? "w-[280px]" : "w-[54px]"} transition-all duration-[400ms] ease-in-out`}>
                <div className="header-box flex items-center justify-between bg-[#1F1E1E] py-6 px-4">
                    <img src="/logo.png" alt="logo" className={`w-[120px] ${isOpen ? "opacity-100" : "opacity-0  hidden"}`} />
                    <RxHamburgerMenu size={"18px"} color="#F1F2F4" className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                </div>

                {isOpen ? <div className="pt-5 px-4">

                    <div>
                        <div className="flex gap-2 items-center"><FiHome size={"18px"} color="white" /> <h1 className="text-lg text-white font-semibold">Меню</h1></div>
                        <div className="block pl-[26px] mt-7">
                            <a href="#" className="block mb-3 text-white text-[14px] font-normal" >Пациенты</a>
                            <a href="#" className="block mb-3 text-white text-[14px] font-normal" >Клиники</a>
                            <a href="#" className="block mb-3 text-white text-[14px] font-normal" >Источники / Агентства</a>
                            <a href="#" className="block mb-3 text-white text-[14px] font-normal" >Координаторы</a>
                        </div>
                        <hr className="shadow-none border-[#646464] my-7" />

                        <div className="flex gap-2 items-center"><FiFilter color="white" size={"18px"} /> <h1 className="text-lg text-white font-semibold">Фильтр</h1></div>

                        <div className="overflow-y-scroll h-[340px] custom-scrol">
                            <div className="status">
                                <h2 className="text-[16px] font-medium text-white mt-8">Статус</h2>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Новое</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Запрос отправлен</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">В процессе</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Забронировал</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Выкупил билеты</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Прибыл</span></label>
                            </div>

                            <div className="coordinator">
                                <h2 className="text-[16px] font-medium text-white mt-8">Координатор</h2>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Ли Алена</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Лим Нелли</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Мун Вероника</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Мун Вероника</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Мун Вероника</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Ли Алена</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Ли Алена</span></label>
                                <label className="flex gap-3 items-center mt-5 cursor-pointer"> <Checkbox /> <span className="font-normal text-[14px] text-white">Ли Алена</span></label>

                            </div>

                        </div>
                    
                    </div>

                </div> : <div className="px-4 pt-5 cursor-pointer"><FiHome size={"18px"} color="white" /> <FiFilter color="white" size={"18px"} className="mt-6" /></div>}

            </nav>


        </div>
    );
}

export default Navbar;