import React from "react";
import { FiBell, FiPlusCircle, FiSettings } from "react-icons/fi";
import { Input } from "../ui/input";
import { IoIosArrowDown } from "react-icons/io";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="flex justify-between w-full p-7 items-center">

            <div className="flex gap-2.5 cursor-pointer">
                <FiPlusCircle size={"24px"} color="#909090"/>
                <p className="font-medium text-[#909090]">Создать пациента</p>
            </div>

            <div className="flex gap-2.5 cursor-pointer">
                <FiSettings size={"24px"} color="#909090" />
                <p className="font-medium text-[#909090]">Настройки</p>
            </div>
        
            <div>
                <Input placeholder="Поиск..." className="h-[45px] border-[#898989] w-3xs" />
            </div>

            <div className="flex items-center gap-5">
                <FiBell size={"24px"} color="#898989" />
                <hr className="shadow-none border-[#898989] rotate-90 w-5"/>
                <p className="flex items-center gap-1 text-[14px] cursor-pointer text-[#898989] font-medium">RU <IoIosArrowDown size={"20px"}/> </p>
                <hr className="shadow-none border-[#898989] rotate-90 w-5" />

                <div><img src="/icon.svg" alt="icon" /></div>
                <IoIosArrowDown size={"20px"} color="#898989"/>
            </div>

        </header>

    );
}

export default Header;