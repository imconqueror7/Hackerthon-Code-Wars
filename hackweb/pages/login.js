import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import { MdWavingHand, MdLockOutline } from 'react-icons/md';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';

const Login = () => {

    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    return (
        <div className="flex mb-[52rem]">
            <main className="absolute md:flex flex-col items-center justify-center w-full md:h-screen flex-1 text-center">
                <div className="rounded-bl-3xl md:flex md:w-2/3 max-w-4xl">
                    <div className="md:w-3/5 p-5 shadow-gray-200 bg-white shadow-md">
                        <div className="md:text-left font-bold">
                            <span className="font-normal">Hack</span>Web
                        </div>
                        <div className="py-4">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-[#1e3ecb] mb-2">Log In to Account</h2>
                                <div className="border-2 md:w-96 w-40 border-black inline-block mb-2"></div>
                                <div className="flex justify-center my-2 text-gray-400">
                                    <Link href="/" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                                        <FaFacebookF className="text-sm" />
                                    </Link>
                                    <Link href="/" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                                        <FaGoogle className="text-sm" />
                                    </Link>
                                    <Link href="/" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                                        <FaLinkedinIn className="text-sm" />
                                    </Link>
                                    <Link href="/" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                                        <FaTwitter className="text-sm" />
                                    </Link>
                                </div>
                                <p className="text-gray-400">OR</p>
                                <p className="text-gray-400 my-4"> Use your Email instead.</p>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                                        <FiMail className="text-gray-400 m-2 text-md" />
                                        <input type="email" placeholder="Enter your Email" className="bg-gray-100 outline-none flex-1" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                                        <MdLockOutline className="text-gray-400 m-2 text-lg" />
                                        <input type="password" placeholder="Enter your Password" className="bg-gray-100 outline-none flex-1" />
                                    </div>
                                </div>
                                <div className="flex justify-evenly mb-6 ml-18">
                                    <label className="flex items-center text-sm cursor-pointer"><input type="checkbox" name="remember" className="mr-1 cursor-pointer" />
                                        Remember Me
                                    </label>
                                    <Link href="#" className="text-sm hover:font-underline">Forgot Password?</Link>
                                </div>
                            <button onClick={handleClick} className=" rounded-full py-2 px-12 inline-block font-semibold border-2 border-[#1e3ecb] text-[#1e3ecb] hover:text-[white] hover:bg-gradient-to-tr from-[#091275] via-[#2069dd] to-[#2fd4ed] hover:tracking-wider duration-100 hover:border-white">Log In</button>
                        </div>
                    </div>
                    <div className=" md:w-2/5 bg-gradient-to-tr from-[#091275] via-[#2069dd] to-[#2fd4ed] text-white shadow-md shadow-gray-400 py-36 px-12 ">
                        <div className="text-center text-3xl animate-shake"><MdWavingHand /></div>
                        <h1 className="text-3xl font-bold " >Hello, User!</h1>
                        <div className="border-2 w-60 border-white inline-block mb-2 "></div>
                        <p> Don&apos;t have an account yet?</p>
                        <p className="mb-8 text-gray-100"> Sign up now & start detecting.</p>
                        <Link href="/signup" className=" border-2 border-white rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-[#1e3ecb] hover:tracking-wider duration-100 hover:border-none">Sign Up</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;