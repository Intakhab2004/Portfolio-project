"use client"

import SkillCard from "./SkillCard"
import { SiExpress, SiMongodb, SiNextdotjs, SiPostman, SiRender, SiTailwindcss, SiVercel } from "react-icons/si"
import { FaGithub, FaGlobe, FaLink, FaNodeJs, FaReact, FaServer, FaStackOverflow } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { MdDataArray } from "react-icons/md";
import { LuSquareFunction } from "react-icons/lu";
import { GiBrain } from "react-icons/gi";


export default function Skills(){
    return (
        <section className="min-h-screen w-full py-16 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-800 dark:from-[#0f0f0f] 
            dark:to-[#1f1f1f] dark:text-gray-100 transition-all duration-500"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl text-green-400 dark:text-indigo-600 font-extrabold mb-4">
                    My Skills
                </h1>

                <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    Frontend Developer | Backend Developer | 350+ DSA Questions on Leetcode 🧑🏻‍💻
                </p>

                <div className="flex flex-wrap justify-center gap-10">
                    <SkillCard
                        title="Frontend"
                        skills={[
                            { name: "Next.js", icon: <SiNextdotjs /> },
                            { name: "React", icon: <FaReact className="text-sky-400" /> },
                            { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400" /> },
                            { name: "HTML/CSS", icon: <FaGlobe className="text-blue-500" /> },
                            { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-300" /> },
                        ]}
                    />

                    <SkillCard
                        title="Backend"
                        skills={[
                            { name: "Node.js", icon: <FaNodeJs /> },
                            { name: "Express.js", icon: <SiExpress className="text-sky-400" /> },
                            { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
                            { name: "MySQL", icon: <GrMysql className="text-blue-500" /> },
                            { name: "Rest API", icon: <FaServer /> },
                        ]}
                    />

                    <SkillCard
                        title="Tools"
                        skills={[
                            { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
                            { name: "Git/Github", icon: <FaGithub /> },
                            { name: "MongoDB Atlas", icon: <SiMongodb className="text-green-700" /> },
                            { name: "Vercel", icon: <SiVercel /> },
                            { name: "Render", icon: <SiRender /> },
                        ]}
                    />

                    <SkillCard
                        title="DSA Problem"
                        skills={[
                            { name: "Array/String", icon: <MdDataArray /> },
                            { name: "Linked List", icon: <FaLink className="text-blue-400" /> },
                            { name: "Stack/Queue", icon: <FaStackOverflow className="text-orange-300" /> },
                            { name: "Recursion", icon: <LuSquareFunction /> },
                            { name: "DP", icon: <GiBrain className="text-pink-400"/> },
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

