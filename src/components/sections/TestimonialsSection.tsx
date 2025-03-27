'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "EasyTakt transformed how we manage our salon. Our stylists love the automated scheduling, and clients appreciate the easy booking system. We've seen a 30% reduction in no-shows!",
    author: "Maria Rodriguez",
    organization: "Bella Hair & Beauty Salon"
  },
  {
    quote: "As a personal trainer, keeping track of multiple clients and their schedules was a nightmare. EasyTakt simplified everything - from session bookings to progress tracking. It's been a game-changer for my business.",
    author: "Alex Chen",
    organization: "Elite Fitness Training"
  },
  {
    quote: "Running a music school with multiple instructors was chaotic until we found EasyTakt. Now our lesson scheduling is seamless, and we can focus on what matters - teaching music.",
    author: "Sarah Mitchell",
    organization: "Harmony Music Academy"
  },
  {
    quote: "The flexibility of EasyTakt is incredible. As a freelance consultant, I needed something that could adapt to my unique scheduling needs. It's like having a personal assistant managing my calendar.",
    author: "Thomas Weber",
    organization: "Independent Business Consultant"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

          <div className="relative">
            {/* Testimonial Container */}
            <div className="flex items-center justify-center min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-4xl mx-auto px-4"
                >
                  <Quote className="w-12 h-12 mx-auto mb-8 text-blue-600 opacity-50" />
                  <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="text-gray-600">
                    <span className="font-semibold">{testimonials[currentIndex].author}</span>
                    {testimonials[currentIndex].organization && (
                      <>
                        <span className="mx-2">·</span>
                        <span>{testimonials[currentIndex].organization}</span>
                      </>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-blue-600 w-4'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 