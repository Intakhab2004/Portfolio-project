"use client"

import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";



export const Navbar = () => {
    const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

    const [mounted, setMounted] = useState(false);
    
    // Avoid hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return(
        <nav className="fixed w-full top-0 z-50 border-b bg-white/70 backdrop-blur-md shadow-sm dark:bg-[#1e1e1e]/70 dark:border-white/50 transition-all duration-500">
            <div className="md:max-w-7xl mx-auto py-5 px-4 flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold md:font-extrabold hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer dark:text-white"
                >
                    Intakhab Alam
                </h1>

                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-7 font-bold">
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className="relative group">
                                    <Link
                                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                        className="transition-all duration-300 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        {link}
                                    </Link>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 rounded-2xl bg-blue-600 transition-all duration-300 group-hover:w-full"/>
                                </li>
                            ))
                        }
                    </ul>

                    <Link href="/contact">
                        <button className="px-4 py-2 cursor-pointer rounded-md text-blue-600 border-1 border-blue-500 hover:bg-blue-600 hover:text-white transition-colors duration-500 dark:text-white">
                            Contact Me
                        </button>
                    </Link>
                    <ThemeToggle/>
                </div>
                <div className="flex items-center space-x-3 md:hidden">
                    <ThemeToggle/>
                    <Menu/>
                </div>
            </div>
        </nav>

    )
}