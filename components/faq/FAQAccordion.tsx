"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-background-light rounded-xl overflow-hidden shadow-md"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-foreground">
              {item.question}
            </span>
            <svg
              className={`w-6 h-6 transition-transform text-primary ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-background-lighter">
              <p className="text-foreground-muted">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
