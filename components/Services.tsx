import React from 'react';
import { FaCouch, FaHammer, FaTools, FaWarehouse } from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const services: Service[] = [
  {
    id: 1,
    title: "Custom Furniture Design",
    description: "Bring your unique vision to life with our bespoke furniture design service.",
    Icon: FaCouch,
  },
  {
    id: 2,
    title: "Woodworking Workshops",
    description: "Learn the craft through our hands-on workshops for beginners and enthusiasts.",
    Icon: FaHammer,
  },
  {
    id: 3,
    title: "Restoration & Repair",
    description: "Give your cherished wooden pieces a new lease on life with our expert restoration service.",
    Icon: FaTools,
  },
  {
    id: 4,
    title: "Custom Built-ins",
    description: "Maximize your space with tailor-made built-in solutions for any room.",
    Icon: FaWarehouse,
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 transition duration-300 hover:transform hover:scale-105 hover:shadow-lg">
              <div className="bg-gray-700 bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <service.Icon size={32} className="text-light-brown" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-light-brown hover:bg-dark-brown text-gray-100 font-bold py-3 px-6 rounded-full transition duration-300">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;