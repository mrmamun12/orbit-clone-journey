
import React from "react";
import { Server, Shield, Zap, Globe, Cloud, Clock } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Server,
    title: "SSD Servers",
    description: "Blazing-fast NVMe SSD storage for optimal performance and reliability."
  },
  {
    icon: Shield,
    title: "Free SSL",
    description: "Automatic SSL certificates to keep your website secure and trusted."
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "We guarantee near-perfect uptime with our robust infrastructure."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network to serve users from the nearest location."
  },
  {
    icon: Cloud,
    title: "Daily Backups",
    description: "Automated daily backups ensure your data is always protected."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Expert assistance available around the clock whenever you need help."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-orbit-lightBlue border border-orbit-blue/20">
            <span className="text-sm font-medium text-orbit-blue">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600">
            Our platform is packed with powerful features designed to make your website fast, secure, and reliable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl bg-orbit-dark text-white animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to experience the difference?</h3>
            <p className="text-gray-300">
              Join thousands of satisfied customers who have made the switch to Orbit.
            </p>
          </div>
          <div className="flex justify-center">
            <a href="#pricing" className="orbit-button-primary bg-white text-orbit-dark hover:bg-gray-100">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
