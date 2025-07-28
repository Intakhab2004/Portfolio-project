"use client"


import About from "../components/common/About";
import Hero from "../components/common/Hero";
import { useState, useEffect } from "react";
import Skills from "../components/common/Skills";
import Projects from "../components/common/Projects";
import Contact from "../components/common/Contact";


export default function Home(){
  const [mounted, setMounted] = useState(false);
      
  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}