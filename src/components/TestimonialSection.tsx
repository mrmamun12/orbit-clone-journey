
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Orbit has completely transformed how we manage our website. The speed is incredible, and the reliability has been flawless.",
    author: "Sarah Johnson",
    role: "CTO at TechStart"
  },
  {
    id: 2,
    content: "As a developer, I appreciate the clean interface and powerful features. Deployment is a breeze, and the support team is super responsive.",
    author: "Mike Chen",
    role: "Lead Developer at DevCraft"
  },
  {
    id: 3,
    content: "We migrated from another hosting provider and saw immediate improvements in load times. Our customers have noticed the difference too.",
    author: "Emma Rodriguez",
    role: "E-commerce Manager at StyleShop"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-24 bg-orbit-lightBlue">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-orbit-blue/20">
            <span className="text-sm font-medium text-orbit-blue">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Loved by Developers and Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our customers say about Orbit.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-500 ease-in-out",
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                  <Quote className="text-orbit-blue opacity-20 mb-4" size={48} />
                  <p className="text-lg md:text-xl mb-6 text-gray-700">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-orbit-blue" : "bg-gray-300"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none px-4">
            <button
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-orbit-blue pointer-events-auto transition-all duration-200 transform hover:scale-105"
              onClick={prevTestimonial}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-orbit-blue pointer-events-auto transition-all duration-200 transform hover:scale-105"
              onClick={nextTestimonial}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
