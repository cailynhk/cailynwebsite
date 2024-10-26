'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';

export const ProjectSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      console.log("scrolling left");
      const scrollAmount = scrollContainerRef.current.offsetWidth; // Scroll the width of the container (showing 3 projects at a time)
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      console.log("scrolling right");
      const scrollAmount = scrollContainerRef.current.offsetWidth; // Scroll the width of the container (showing 3 projects at a time)
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    console.log('scrollContainerRef:', scrollContainerRef.current);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div className="overflow-hidden w-full px-4 md:px-6">
        <div className="flex space-x-8" ref={scrollContainerRef} style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}>
          {/** Project 1 **/}
          <div className="min-w-[33.333%] flex-shrink-0 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Project 1"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              height={310}
              src="/placeholder.svg"
              style={{ aspectRatio: "550/310", objectFit: "cover" }}
              width={550}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl text-[#4b5563]">Project 1</h3>
              <p className="text-sm text-[#333] dark:text-gray-400">
                A modern web application built with React and Node.js.
              </p>
            </div>
          </div>
          {/** Project 2 **/}
          <div className="min-w-[33.333%] flex-shrink-0 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Project 2"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              height={310}
              src="/placeholder.svg"
              style={{ aspectRatio: "550/310", objectFit: "cover" }}
              width={550}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl text-[#4b5563]">Project 2</h3>
              <p className="text-sm text-[#333] dark:text-gray-400">
                A responsive e-commerce website built with Next.js.
              </p>
            </div>
          </div>
          {/** Project 3 **/}
          <div className="min-w-[33.333%] flex-shrink-0 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Project 3"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              height={310}
              src="/placeholder.svg"
              style={{ aspectRatio: "550/310", objectFit: "cover" }}
              width={550}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl text-[#4b5563]">Project 3</h3>
              <p className="text-sm text-[#333] dark:text-gray-400">
                A full-stack web application built with React and Express.
              </p>
            </div>
          </div>
          {/** Project 4 **/}
          <div className="min-w-[33.333%] flex-shrink-0 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Project 4"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              height={310}
              src="/placeholder.svg"
              style={{ aspectRatio: "550/310", objectFit: "cover" }}
              width={550}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl text-[#4b5563]">Project 4</h3>
              <p className="text-sm text-[#333] dark:text-gray-400">
                A mobile app for task management.
              </p>
            </div>
          </div>
          {/** Project 5 **/}
          <div className="min-w-[33.333%] flex-shrink-0 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Project 5"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              height={310}
              src="/placeholder.svg"
              style={{ aspectRatio: "550/310", objectFit: "cover" }}
              width={550}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl text-[#4b5563]">Project 5</h3>
              <p className="text-sm text-[#333] dark:text-gray-400">
                An AI-powered chat application.
              </p>
            </div>
          </div>
          {/** Project 6 **/}
          <div className="min-w-[33.333%] flex-shrink-0 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <img
              alt="Project 6"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
              height={310}
              src="/placeholder.svg"
              style={{ aspectRatio: "550/310", objectFit: "cover" }}
              width={550}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl text-[#4b5563]">Project 6</h3>
              <p className="text-sm text-[#333] dark:text-gray-400">
                A blockchain-based payment system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </section>
  );
};

export default ProjectSection;
