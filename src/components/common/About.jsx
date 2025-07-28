"use client"

import Image from "next/image"
import img from "../../assets/img2.jpg"



export default function About(){
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#1b1a1a] px-4 py-16 md:py-24 transition-colors duration-700">
            <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-800 dark:text-gray-100">
                About <span className="text-blue-500 dark:text-blue-400">Me</span>
            </h1>
            <div className="max-w-6xl w-full bg-white/80 dark:bg-[#111111]/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12 
                    flex flex-col lg:flex-row items-center gap-8 md:gap-12 border border-gray-200 hover:shadow-xl hover:border-blue-200
                    dark:hover:border-purple-400 dark:border-white/70 transition-all duration-700 will-change-transform"
            >
                <div className="relative">
                    <Image
                        src={img}
                        alt="profile img"
                        priority={true}
                        className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl w-48 h-48 
                        sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute top-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full 
                        border-8 border-purple-700 blur-xl pointer-events-none"></div>
                </div>
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                        Hi, I'm{" "} 
                        <span className="text-blue-500 dark:text-blue-400">Intakhab</span> 👋
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed md:leading-loose text-sm md:text-base">
                        I'm a dedicated and enthusiastic <span className="font-medium text-blue-500 dark:text-blue-400">Full-Stack Web Developer</span> with 
                        a strong foundation in <span className="font-medium">Frontend and Backend development</span>. With a passion 
                        for building modern, scalable, and user-friendly web applications. I am always eager to explore new 
                        technologies, contribute to impactful projects, and grow as a tech professional.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed md:leading-loose text-sm md:text-base">
                        On the frontend, I have expertise in <span className="font-medium">JavaScript, TypeScript, React, Next.js, and TailwindCSS</span>, 
                        enabling me to craft visually appealing, responsive, and interactive user interfaces. On the backend, I work 
                        with <span className="font-medium">Node.js, Express, and MongoDB</span> to design secure, scalable, and 
                        efficient APIs and server-side applications.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed md:leading-loose text-sm md:text-base">
                        Apart from academics and coding, I am a <span className="font-medium text-purple-600 dark:text-purple-400">
                        fitness enthusiast</span> who enjoys regular gym workouts to stay active and disciplined.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span className="bg-blue-100 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 px-4 py-2 
                            rounded-full text-xs md:text-sm font-medium border border-blue-200 dark:border-blue-800 hover:-translate-y-1
                            hover:shadow-lg hover:shadow-blue-400 transition-all duration-300"
                        >
                            Frontend Developer
                        </span>
                        <span className="bg-green-100 dark:bg-green-900/80 text-green-700 dark:text-green-300 px-4 py-2 
                            rounded-full text-xs md:text-sm font-medium border border-green-200 dark:border-green-800 hover:-translate-y-1 
                            hover:shadow-lg hover:shadow-green-200 transition-all duration-300"
                        >
                            Backend Developer
                        </span>
                        <span className="bg-purple-100 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300 px-4 py-2 
                            rounded-full text-xs md:text-sm font-medium border border-purple-200 dark:border-purple-800 hover:-translate-y-1 
                            hover:shadow-lg hover:shadow-purple-400 transition-all duration-300"
                        >
                            Fitness Enthusiast
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}