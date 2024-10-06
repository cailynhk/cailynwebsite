"use client";
import { useRef } from 'react';
import Link from 'next/link';

const ProjectSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div className="container space-y-12 px-4 md:px-6 overflow-x-auto" ref={scrollContainerRef}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center"></div>
        <div className="mx-auto flex items-start gap-8 sm:max-w-4xl md:gap-12 lg:max-w-5xl">
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </section>
  );
};

export default ProjectSection;