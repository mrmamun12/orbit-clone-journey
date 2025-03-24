
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How reliable is your hosting service?",
      answer: "Our hosting service boasts a 99.9% uptime guarantee. We utilize enterprise-grade infrastructure and have redundant systems in place to ensure your website remains accessible to visitors at all times."
    },
    {
      question: "Do you offer website migration assistance?",
      answer: "Yes! We provide free website migration services for all new customers. Our technical team will handle the entire process, ensuring a seamless transition with zero downtime."
    },
    {
      question: "What kind of customer support do you provide?",
      answer: "We offer 24/7/365 customer support through live chat, email, and phone. Our support team consists of experienced hosting specialists who can help with any technical issues or questions you may have."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Absolutely! We provide a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our services within the first month, we'll refund your payment in full."
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer: "Yes, you can easily upgrade your hosting plan as your website grows. Our scalable infrastructure allows for seamless transitions between plans with no downtime or complicated migration processes."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our hosting services, technical support, and more.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
