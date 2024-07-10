'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '/MyWork.module.css';

interface WorkItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const workItems: WorkItem[] = [
  { id: 1, title: "Custom Dining Table", description: "Hand-crafted oak dining table with epoxy river inlay", imageUrl: "/furniture1.jpg" },
  { id: 2, title: "Bespoke Bookshelf", description: "Floor-to-ceiling bookshelf with sliding ladder", imageUrl: "/furniture2.jpg" },
  { id: 3, title: "Rustic Coffee Table", description: "Reclaimed barn wood coffee table with steel accents", imageUrl: "/furniture3.webp" },
  { id: 4, title: "Modern Office Desk", description: "Sleek walnut desk with built-in wireless charging", imageUrl: "/furniture4.webp" },
  // Add more work items as needed
];

const MyWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + workItems.length) % workItems.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Craftsmanship in Action</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Each piece tells a story of dedication, skill, and artistic vision. Explore a selection of my finest creations, where wood comes to life in functional, beautiful forms.
          </p>
        </div>
        
        <div className={styles.carousel}>
          <button onClick={prevSlide} className={styles.carouselButton}>&#10094;</button>
          <div className={styles.carouselSlide}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <div className="relative h-96">
                <Image
                  src={workItems[currentIndex].imageUrl}
                  alt={workItems[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-200">{workItems[currentIndex].title}</h3>
                <p className="text-gray-300">{workItems[currentIndex].description}</p>
              </div>
            </div>
          </div>
          <button onClick={nextSlide} className={styles.carouselButton}>&#10095;</button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-300">Piece {currentIndex + 1} of {workItems.length}</p>
        </div>
      </div>
    </section>
  );
};

export default MyWork;