import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ValueStrip: React.FC = () => {
  const benefits = [
    "AI-backed evaluation",
    "Actionable roadmap",
    "Progress dashboard"
  ];

  return (
    <div className="border-y border-stone-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 py-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-stone-700 font-medium">
              <CheckCircle2 size={20} className="text-green-500" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueStrip;
