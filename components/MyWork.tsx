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
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Work</h2>
        <div className={styles.carousel}>
          <button onClick={prevSlide} className={styles.carouselButton}>&#10094;</button>
          <div className={styles.carouselSlide}>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <div className="relative h-96">
                <Image
                  src={workItems[currentIndex].imageUrl}
                  alt={workItems[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{workItems[currentIndex].title}</h3>
                <p className="text-gray-300">{workItems[currentIndex].description}</p>
              </div>
            </div>
          </div>
          <button onClick={nextSlide} className={styles.carouselButton}>&#10095;</button>
        </div>
      </div>
    </section>
  );
};

export default MyWork;