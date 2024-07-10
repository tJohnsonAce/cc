import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What types of wood do you work with?",
    answer: "We work with a variety of hardwoods and softwoods, including oak, maple, walnut, cherry, pine, and more. The choice of wood depends on the project and client preferences."
  },
  {
    id: 2,
    question: "How long does a custom furniture project typically take?",
    answer: "The timeline varies depending on the complexity of the project and our current workload. On average, a custom piece can take anywhere from 4-12 weeks from design approval to completion."
  },
  {
    id: 3,
    question: "Do you offer a warranty on your work?",
    answer: "Yes, we offer a 5-year warranty on all our custom furniture pieces against defects in materials and workmanship under normal use and care."
  },
  {
    id: 4,
    question: "Can you match an existing piece of furniture?",
    answer: "While we can't create an exact replica due to the unique nature of wood, we can certainly create a piece that closely matches the style, color, and finish of an existing piece."
  },
  {
    id: 5,
    question: "What is your pricing?",
    answer: "We offer competitive pricing for our custom furniture projects. Please contact us for a quote."
  },
  {
    id: 6,
    question: "What is your policy on deposits and payments?",
    answer: "We typically require a 50% deposit to begin work on custom projects. The remaining balance is due upon completion, before delivery or pickup. For larger projects, we may offer a split payment schedule."
  }
];

const FAQ: React.FC = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);
    const [imageHeight, setImageHeight] = useState<number>(0);
    const faqRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (faqRef.current) {
        setImageHeight(faqRef.current.clientHeight);
      }
    }, []);
  
    const toggleItem = (id: number) => {
      setOpenItem(openItem === id ? null : id);
    };
  
    return (
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2 sticky top-0">
              <div style={{ height: `${imageHeight}px` }} className="relative">
                <Image
                  src="/faqImage.jpg" // Replace with your image path
                  alt="Woodworking"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2" ref={faqRef}>
              <h2 className="text-4xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.id} className="bg-slate-700 bg-opacity-50 rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className="text-white font-semibold">{item.question}</span>
                      {openItem === item.id ? (
                        <FaChevronUp className="text-light-brown" />
                      ) : (
                        <FaChevronDown className="text-light-brown" />
                      )}
                    </button>
                    {openItem === item.id && (
                      <div className="p-4 bg-gray-700 bg-opacity-50">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;