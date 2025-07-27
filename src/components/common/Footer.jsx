"use client"

import { useState, useEffect } from "react";


export default function Footer(){
    const [mounted, setMounted] = useState(false);
        
    // Avoid hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="w-full bg-gradient-to-b from-blue-900 to-black text-white transition-colors">
            I am Footer
        </div>
    )
}

