
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const bubbles = heroRef.current.querySelectorAll('.bubble');
      bubbles.forEach((bubble, index) => {
        const bubbleEl = bubble as HTMLElement;
        const factor = (index + 1) * 0.2;
        bubbleEl.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-16 overflow-hidden"
      ref={heroRef}
    >
      {/* Decorative bubbles */}
      <div className="bubble absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-orbit-blue/10 blur-3xl opacity-60 transition-transform duration-700"></div>
      <div className="bubble absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-purple-400/10 blur-3xl opacity-50 transition-transform duration-700"></div>
      <div className="bubble absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl opacity-40 transition-transform duration-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-orbit-lightBlue border border-orbit-blue/20 animate-fade-in-down">
            <span className="text-sm font-medium text-orbit-blue">Web Hosting Reimagined</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in">
            <span className="text-gradient">Powerful</span> Cloud Hosting <br />
            For Modern Websites
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in">
            Experience lightning-fast performance and unmatched reliability with our cutting-edge hosting platform designed for developers and businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up">
            <a href="#pricing" className="orbit-button-primary">
              Get Started
            </a>
            <a href="#features" className="orbit-button-outline flex items-center justify-center gap-2">
              Explore Features <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            {/* Placeholder for dashboard image - would be replaced with actual image */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 flex items-center justify-center">
              <div className="glass-card p-6 rounded-xl w-full max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 h-8 bg-gray-700/50 rounded ml-2"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-700/30 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-700/30 rounded w-1/2"></div>
                  <div className="h-6 bg-orbit-blue/40 rounded w-5/6"></div>
                  <div className="h-6 bg-gray-700/30 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
