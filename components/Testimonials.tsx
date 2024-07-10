import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Created a beautiful custom dining table for our family. The craftsmanship is impeccable and it's become the centerpiece of our home.",
    author: "John Smith",
    location: "Atlanta, GA"
  },
  {
    id: 2,
    text: "I commissioned a set of bookshelves, and I couldn't be happier with the result. The attention to detail and quality of work is outstanding.",
    author: "Sarah Johnson",
    location: "Seattle, WA"
  },
  {
    id: 3,
    text: "The restoration work on my antique dresser was phenomenal. It looks brand new while preserving its character.",
    author: "Michael Brown",
    location: "Chicago, IL"
  },
  {
    id: 4,
    text: "I commissioned a set of bookshelves, and I couldn't be happier with the result. The attention to detail and quality of work is outstanding.",
    author: "Sarah Johnson",
    location: "Seattle, WA"
  },
];

const TestimonialPage: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-700 bg-opacity-50 rounded-lg p-6">
              <FaQuoteLeft size={24} className="text-light-brown mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div>
                <h3 className="text-lg font-semibold text-white">{testimonial.author}</h3>
                <p className="text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;