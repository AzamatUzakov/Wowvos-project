import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


const LogIn: React.FC = () => {
    return (

        <div className="relative w-full h-screen text-center">

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]">
                <img src="/mainLogo.svg" alt="logo" className="w-[205px] mb-[70px] mx-auto" />

                <h1 className="text-3xl font-semibold">Sign in to your account</h1>

                <form className="w-full shadow mt-6 p-5 rounded-[10px]">
                    <Input placeholder="Email" className="text-center h-[50px]" />

                    <Input placeholder="Password" className="text-center h-[50px] mt-4" />

                    <div className="flex items-center justify-between mt-5">
                        <label className="flex gap-2  cursor-pointer">
                            <input type="radio" />
                            <p>Remember me</p>
                        </label>
                        <p>Forgot password?</p>
                    </div>
                    <Button variant="outline" className="mt-4 w-full h-[50px] bg-[#2563EB] text-white text-[16px] ">Sign In</Button>
                </form>

            </div>

        </div>

    );
}

export default LogIn;