import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form"
import "./index.css"
import { Link } from "react-router-dom";

const LogIn: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>()

    const regExp = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
    };
    const onSubmit = (data: any) => {
        console.log(data)
        reset()

    }
    return (

        <div className="relative w-full h-screen text-center">

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]">
                <Link to={"/"}>                <img src="/mainLogo.svg" alt="logo" className="w-[205px] mb-[70px] mx-auto" /></Link>
                <h1 className="text-3xl font-semibold">Sign in to your account</h1>

                <form className="w-full shadow mt-6 p-5 rounded-[10px] " onSubmit={handleSubmit(onSubmit)}>


                    <Input placeholder="Email"

                        {...register("email", { required: true, pattern: regExp.email })}
                        name="email"
                        className={`text-center h-[50px] outline-none ${errors.email ? "border-red-600" : "border-gray-300"}`}
                    />
                    {errors.email && (
                        <span className="text-red-500">* Неверный email</span>
                    )}


                    <Input placeholder="Password"
                        {...register("password", { required: true, pattern: regExp.password })}
                        name="password"
                        className={`text-center h-[50px] mt-4 ${errors.password ? "border-red-600" : "border-gray-300"}`}
                    />{errors.password && (
                        <span className="text-red-500">Пароль должен содержать заглавную букву, цифру и специальный символ !@#$%^&*.</span>
                    )}





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