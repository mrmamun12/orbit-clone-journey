
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PlanFeature {
  included: boolean;
  text: string;
}

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 9.99,
    period: "month",
    description: "Perfect for personal websites and small projects",
    features: [
      { included: true, text: "1 Website" },
      { included: true, text: "10GB SSD Storage" },
      { included: true, text: "50GB Bandwidth" },
      { included: true, text: "Free SSL Certificate" },
      { included: false, text: "Daily Backups" },
      { included: false, text: "Priority Support" },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: 24.99,
    period: "month",
    description: "Ideal for businesses and growing websites",
    features: [
      { included: true, text: "5 Websites" },
      { included: true, text: "50GB SSD Storage" },
      { included: true, text: "200GB Bandwidth" },
      { included: true, text: "Free SSL Certificate" },
      { included: true, text: "Daily Backups" },
      { included: true, text: "Priority Support" },
    ],
    highlighted: true,
    buttonText: "Get Started",
  },
  {
    name: "Enterprise",
    price: 49.99,
    period: "month",
    description: "For large-scale applications and high-traffic sites",
    features: [
      { included: true, text: "Unlimited Websites" },
      { included: true, text: "200GB SSD Storage" },
      { included: true, text: "Unlimited Bandwidth" },
      { included: true, text: "Free SSL Certificate" },
      { included: true, text: "Daily Backups" },
      { included: true, text: "24/7 Premium Support" },
    ],
    buttonText: "Contact Us",
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  
  const toggleBilling = () => {
    setAnnual(!annual);
  };
  
  const getPrice = (basePrice: number) => {
    if (annual) {
      // 20% discount for annual
      return (basePrice * 12 * 0.8) / 12;
    }
    return basePrice;
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-orbit-lightBlue border border-orbit-blue/20">
            <span className="text-sm font-medium text-orbit-blue">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose a plan that works best for your needs. All plans include a 30-day money-back guarantee.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={cn("mr-3 text-sm", !annual && "font-medium text-gray-900")}>Monthly</span>
            <button
              onClick={toggleBilling}
              className={cn(
                "relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orbit-blue focus:ring-offset-2",
                annual ? "bg-orbit-blue" : "bg-gray-200"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  annual ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("ml-3 text-sm", annual && "font-medium text-gray-900")}>
              Yearly <span className="text-xs text-orbit-blue">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300 animate-fade-in",
                plan.highlighted
                  ? "bg-white border-2 border-orbit-blue shadow-xl shadow-orbit-blue/10 md:-mt-4 md:mb-4"
                  : "bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1",
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-orbit-blue text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 mt-1">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${getPrice(plan.price).toFixed(2)}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>
                {annual && (
                  <p className="text-sm text-orbit-blue mt-1">
                    ${(plan.price * 12 * 0.8).toFixed(2)} billed annually
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={cn(
                      "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                      feature.included ? "bg-orbit-lightBlue" : "bg-gray-100"
                    )}>
                      <Check 
                        size={12} 
                        className={feature.included ? "text-orbit-blue" : "text-gray-300"} 
                      />
                    </div>
                    <span 
                      className={cn(
                        "ml-3 text-sm", 
                        feature.included ? "text-gray-700" : "text-gray-400"
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={cn(
                  "w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:translate-y-[-2px]",
                  plan.highlighted
                    ? "bg-orbit-blue text-white hover:shadow-lg hover:shadow-orbit-blue/20"
                    : "bg-white border border-orbit-blue text-orbit-blue hover:bg-orbit-blue/5"
                )}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
