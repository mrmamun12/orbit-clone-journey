
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  // Calculate animation delay based on index
  const delay = index * 150;
  
  return (
    <div 
      className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'backwards'
      }}
    >
      <div className="w-12 h-12 rounded-lg bg-orbit-lightBlue flex items-center justify-center mb-4">
        <Icon className="text-orbit-blue" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
