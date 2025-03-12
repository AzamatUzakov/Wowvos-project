import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import DragDrop from "../custom/DragDrob";



const Patient: React.FC = () => {
    return (

        <section className="">
            <div className="px-7" >
                <div className="flex items-center gap-11">
                    <h1 className="text-3xl font-semibold">Пациенты</h1>
                    <div className="flex gap-4 items-center">
                        <img src="/button.png" alt="button" className="w-4" />
                        <GiHamburgerMenu size={"20px"} />
                    </div>
                </div>

                <div className="flex items-center justify-between mt-5">

                    <div className="flex gap-2 text-[#838383] font-normal ">
                        <a href="#">Home</a> /
                        <a href="#">Level 2</a> /
                        <a href="#">Level 3</a> /
                        <a href="#" className="text-[#C1C1C1]">Пациенты</a>
                    </div>


                    <div className="">
                        <Pagination className="">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>


                    </div>
                </div>
            </div>
            <DragDrop />
        </section>
    );
}

export default Patient;