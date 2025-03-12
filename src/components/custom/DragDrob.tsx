import React from "react";
import { SlPlane } from "react-icons/sl";



const DragDrop: React.FC = () => {
    return (

        <section className="bg-[#f1f2f4] p-3 h-[520px] flex gap-3">

            <div className="card w-[185px] p-3 bg-white rounded-2xl h-[100%]">

                <div className="flex items-end justify-between"><h2 className="font-semibold leading-4">Новое <br /> обращение</h2> <p className=" w-6 h-6 p-1 rounded-3xl bg-[#22B5DC] flex justify-center items-center text-white font-medium">3</p></div>

                <div className="item w-full bg-[#F1F2F4] mt-5 rounded-[6px] p-3 pb-6">
                    <h3 className="text-[#333333] text-[14px] font-medium leading-4">Борисова <br />
                        Ольга</h3>
                    <p className="text-[#909090] mt-2">36 лет, Ташкент, Хан Анна, </p>


                    <div className="flex justify-between gap-2 mt-5">
                        <div className="leftBox flex flex-col  items-center gap-1">
                            <img className="w-5" src="./chimodan.png" alt="chimodan" />
                            <img className="w-[1px]" src="/stick.png" alt="stick" />
                            <SlPlane size={"20px"} />
                        </div>

                        <div className="w-full">
                            <div className="flex items-center justify-between text-[12px] font-medium text-[#909090]"><p>Диагноз</p> <p>10.01</p></div>
                            <p className="font-medium text-[12px] mt-3 leading-3">Обратился с диагнозом “Птоз”</p>

                            <div className="flex items-center justify-between text-[12px] font-medium text-[#909090] mt-7"><p>Вылет</p> <p>30.01</p></div>
                            <p className="font-medium text-[12px] mt-3 leading-3">Вылет пациента в клинику</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="card w-[185px] p-3 bg-white rounded-2xl h-[100%]">

                <div className="flex items-end justify-between"><h2 className="font-semibold leading-4">Запрос  <br /> отправлен</h2> <p className=" w-6 h-6 p-1 rounded-3xl bg-[#22B5DC] flex justify-center items-center text-white font-medium">1</p></div>
            </div>

            
            <div className="card w-[185px] p-3 bg-white rounded-2xl h-[100%]">

                <div className="flex items-end justify-between"><h2 className="font-semibold leading-4">В процессе</h2> <p className=" w-6 h-6 p-1 rounded-3xl bg-[#22B5DC] flex justify-center items-center text-white font-medium">4</p></div>
            </div>


            <div className="card w-[185px] p-3 bg-white rounded-2xl h-[100%]">

                <div className="flex items-end justify-between"><h2 className="font-semibold leading-4">Забронировал</h2> <p className=" w-6 h-6 p-1 rounded-3xl bg-[#22B5DC] flex justify-center items-center text-white font-medium">1</p></div>
            </div>

            
               <div className="card w-[185px] p-3 bg-white rounded-2xl h-[100%]">

                <div className="flex items-end justify-between"><h2 className="font-semibold leading-4">Запрос  <br /> отправлен</h2> <p className=" w-6 h-6 p-1 rounded-3xl bg-[#22B5DC] flex justify-center items-center text-white font-medium">1</p></div>
            </div>
            

        </section>
    );
}
export default DragDrop;