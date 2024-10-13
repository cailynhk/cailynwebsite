
'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import '../../app/styles.css';
import { ProjectSection } from "./ProjectSection";

export function Component() {
  return (
    (<div
      className="flex flex-col min-h-[100dvh] bg-[linear-gradient(to_right_top,#f7d8e7,#f7dfec,#f8e6f1,#f9ecf5,#faf3f9,#f8f4fa,#f7f4fb,#f5f5fc,#ebf2fc,#deeff9,#d1edf3,#c7eae8)] text-[#333] fade-in"> {/* Added fade-in class */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
  {/* Left-aligned clickable text (redirects to the homepage) */}
  <Link href="/" className="flex items-center">
    <span className="text-sm font-medium text-[#4b5563] hover:text-[#b092d7]">(・ω ・✿)</span>
  </Link>
      <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-[#b092d7] text-[#4b5563]"
            href="https://github.com/cailynhk">
            Github
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#b092d7] text-[#4b5563]"
            href="https://www.linkedin.com/in/cailyn-kim-30aa3a219/">
            LinkedIn
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#b092d7] text-[#4b5563]"
            href="https://devpost.com/kimcailyn?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
            Devpost
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section
  className="w-full pt-12 md:pt-24 lg:pt-32 "
>
  <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
      <div>
        <h1 className="lg:leading-tighter text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#4b5563]">
          Hey There!
        </h1>
        <p className="mx-auto max-w-[700px] text-[#333] md:text-xl dark:text-gray-400 mt-4">
          I'm <span className="text-[#b092d7]">Cailyn</span>, a third year Mathematics student @ UofT.
        </p>
                {/* Button for Resume */}
                <Link href="https://drive.google.com/file/d/1TCZZhOcEsUgMW5jBPolvQBI3at_z7A84/view?usp=sharing" target="_blank">
          <Button className="mt-4 bg-[#4b5563] text-white hover:bg-[#374151] focus-visible:ring-[#4b5563]">
            My Resume
          </Button>
        </Link>
      </div>
      <div className="flex justify-center">
        <div
          className="rounded-full"
          style={{
            height: "400px",
            width: "400px",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  </div>
</section>

        <ProjectSection />


        <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
  <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-[#4b5563]">
          About Me
        </h2>
        <p className="max-w-[700px] text-[#333] md:text-xl dark:text-gray-400">
          I am a passionate software developer with a strong background in full-stack web development. I have
          experience building modern, responsive, and scalable web applications using a variety of technologies,
          including React, Node.js, and MongoDB.
        </p>
      </div>
      
      {/* Circular Image */}
      <div className="flex justify-center">
        <img
          src="/IMG_4453.jpg"
          alt="About Me Image"
          className="rounded-full w-[300px] h-[300px] object-cover"
        />
      </div>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
    </div>
  </div>
</section>

</section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#4b5563]">Experience</h2>
                <p
                  className="max-w-[900px] text-[#333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out my professional experience and timeline.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20 max-w-2xl w-full">
                <div className="grid gap-1 text-sm relative">
                  <div
                    className="aspect-square w-6 bg-gray-900 rounded-full absolute left-0 translate-x-[-35px] z-10 top-1 dark:bg-gray-50" />
                  <div className="font-medium">March 2020 - Present - Software Engineer, Acme Inc.</div>
                  <div className="text-[#333] dark:text-gray-400">
                    Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated
                    with cross- functional teams to deliver high-quality software solutions.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                    className="aspect-square w-6 bg-gray-900 rounded-full absolute left-0 translate-x-[-35px] z-10 top-1 dark:bg-gray-50" />
                  <div className="font-medium">June 2018 - February 2020 - Frontend Developer, XYZ Corp.</div>
                  <div className="text-[#333] dark:text-gray-400">
                    Designed and implemented responsive user interfaces using React and CSS frameworks. Collaborated
                    with backend developers to integrate frontend components with API endpoints.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                    className="aspect-square w-6 bg-gray-900 rounded-full absolute left-0 translate-x-[-35px] z-10 top-1 dark:bg-gray-50" />
                  <div className="font-medium">September 2016 - May 2018 - Intern, ABC Inc.</div>
                  <div className="text-[#333] dark:text-gray-400">
                    Gained hands-on experience in web development, participating in the development of various web
                    applications. Learned about agile methodologies and best practices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-[#333] dark:text-gray-400"></p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        </nav>
      </footer>
    </div>)
  );
}

function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}
