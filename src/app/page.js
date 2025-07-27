"use client"


import About from "@/components/common/About";
import Hero from "../components/common/Hero";
import { useState, useEffect } from "react";


export default function Home(){
  const [mounted, setMounted] = useState(false);
      
  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <Hero/>
      <About/>
    </div>
  )
}