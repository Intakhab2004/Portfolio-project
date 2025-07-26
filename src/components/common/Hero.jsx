"use client"

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import img from "../../assets/img2.jpg"



export default function Hero(){
    return (
       <section className="relative flex justify-center items-center w-full overflow-hidden px-4 py-16 min-h-screen mt-10 lg:mt-0 md:mt-10 bg-white dark:bg-[#1e1e1e] transition-colors duration-500">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12">
                <div>
                    <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-800 dark:text-gray-100">
                        Hey there,{" "} 
                        <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                            I'm Intakhab
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-center sm:text-center md:text-left font-bold mb-6 max-w-xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-300">
                        Frontend Developer | Backend Developer 
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6 text-center">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-[0.6rem] cursor-pointer font-semibold rounded-md text-blue-600 border-1 border-blue-400 
                            hover:bg-blue-600 hover:text-white hover:scale-105 dark:text-pink-600 dark:border-pink-300
                            dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-500"
                        >
                            Download Resume
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-[0.6rem] cursor-pointer font-semibold rounded-md text-pink-600 border-1 border-pink-500 
                            hover:bg-pink-500 hover:text-white hover:scale-105 dark:text-blue-600 dark:border-blue-400
                            dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-500"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="flex justify-center mt-7 lg:justify-start space-x-6 text-2xl sm:text-3xl dark:text-white">
                        <Link href="https://github.com/Intakhab2004" target="_blank">
                            <FaGithub className="hover:scale-120 transition-all duration-300"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/intakhab-alam-996a1b323" target="_blank">
                            <FaLinkedin className="hover:scale-120 hover:text-blue-500 transition-all duration-300"/>
                        </Link>
                        <Link href="https://leetcode.com/u/ikb_rock4648/">
                            <SiLeetcode className="hover:scale-120 hover:text-yellow-600 transition-all duration-300"/>
                        </Link>
                    </div>
                </div>
                
                <div className="w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 aspect-square rounded-3xl shadow-xl overflow-hidden hover:scale-110 transition duration-300">
                    <Image
                        src={img}
                        alt="heroImg"
                        className="w-full h-full object-cover"
                        priority={true}
                    />
                </div>
            </div>
            
            <marquee 
                className="absolute bottom-0 w-full bg-white/70 overflow-hidden py-4 backdrop:blur-md dark:bg-[#1e1e1e]/70"
            >
                <pre className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    HTML    CSS    JavaScript    TypeScript    React    Next.js    TailwindCSS    Node.js    Express    MongoDB    GitHub    Vercel    Render    Postman    C++    DSA
                </pre>
            </marquee>
       </section>
    )
}