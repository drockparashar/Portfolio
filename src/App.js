import React, { useState, useEffect } from "react";
import RotatingText from "./effects/floatingText";
import {
  AcademicCapIcon,
  ArrowUpIcon,
  DocumentDownloadIcon,
  TerminalIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";

import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiInfluxdb,
  SiRaspberrypi,
  SiEspressif,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSocketdotio,
  SiDocker,
  SiAwslambda,
  SiTensorflow,
  SiPrisma,
  SiNodedotjs,
  SiRedux,
  SiGraphql,
} from "react-icons/si";
import { DiAtom } from "react-icons/di";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEye,
  FaProjectDiagram,
  FaUserAstronaut,
} from "react-icons/fa";

const App = () => {
  const [, setActiveProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "Snippet Cove",
      description:
        "SnippetCove is a full-stack code snippet sharing platform enabling developers to discover, save, and share reusable code snippets across multiple programming languages with user profiles, activity tracking, and responsive design",
      tech: ["Next.js", "Node.js", "OAuth"],
      github: "https://github.com/drockparashar/snippetCove",
      liveUrl: "https://snippet-cove.vercel.app/",
      image: "/SnippetCove.png",
      gradient: "from-green-500 via-blue-400 to-purple-500",
    },
    {
      title: "Test Me",
      description:
        "Test Me is an AI-powered personalized learning platform designed to help students practice and improve their knowledge through dynamic tests and performance analytics. It leverages modern web technologies and AI to create an engaging and adaptive educational experience.",
      tech: ["Node.js", "Gemini", "Express.js", "Recharts.js"],
      github: "https://github.com/drockparashar/test-me",
      liveUrl: "https://test-me-eta.vercel.app/",
      image: "/TestMe.png",
      gradient: "from-green-500 via-blue-400 to-purple-500",
    },
    {
      title: "RecapTube Chrome Extension",
      description:
        "RecapTube is a Chrome extension that summarizes YouTube video transcripts. It allows you to quickly get a summary of a video without watching the entire content.",
      tech: ["Node.js", "Express.js", "Gemini"],
      github: "https://github.com/drockparashar/recapTube-extension",
      liveUrl: "https://github.com/drockparashar/recapTube-extension",
      image: "/RecapTube.png",
      gradient: "from-green-500 via-blue-400 to-purple-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/drockparashar",
      color: "hover:text-gray-400",
      tooltip: "GitHub",
      label: "Follow on GitHub",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/pranshu-parashar-443859249/",
      color: "hover:text-blue-500",
      tooltip: "LinkedIn",
      label: "Connect on LinkedIn",
    },
    {
      icon: FaTwitter,
      link: "https://x.com/PranshuParasha4",
      color: "hover:text-blue-400",
      tooltip: "Twitter",
      label: "Follow on Twitter",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/drock_parashar/",
      color: "hover:text-pink-400",
      tooltip: "Instagram",
      label: "Follow on Instagram",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-black via-zinc-900 to-black text-white"
          : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-black"
      } overflow-x-hidden font-sans`}
    >

      {scrollPosition > 500 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-all duration-300 z-50"
        >
          <ArrowUpIcon className="h-6 w-6 text-white" />
        </button>
      )}

      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-all duration-300 z-50"
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_40%)] opacity-70"
              : "bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_40%)] opacity-70"
          }`}
        />

        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="font-space-grotesk text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient tracking-tight">
            Hi, I'm
          </h1>
          <br></br>
          <h1 className="font-space-grotesk text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient tracking-tight">
            Pranshu Parashar
          </h1>
          <p
            className={`font-sans text-2xl ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            } mb-16 font-medium flex flex-col md:flex-row items-center justify-center gap-2`}
          >
            <span>I am a</span>
            <RotatingText
              texts={[
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Designer",
                "Full Stack Developer",
                "App Developer",
              ]}
              mainClassName={`inline-flex px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg font-bold text-2xl md:text-3xl ${
                isDarkMode ? "bg-black text-white" : "bg-grey text-black"
              } font-sans`}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 font-sans"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </p>

          {/* Social Links (always at bottom, all views) */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`group relative p-3 rounded-lg backdrop-blur-sm hover:bg-white/10 transform hover:scale-110 transition-all duration-300 font-sans`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.tooltip}
              >
                <social.icon
                  className={`h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } ${social.color} transition-colors duration-300`}
                />
                <span className="absolute -bottom-full left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About Me Section - Redesigned */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className=" mb-10">
            <h2
              className={`font-sans text-2xl lg:text-3xl font-bold tracking-tight mb-8 flex items-center gap-3 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <FaUserAstronaut className="text-purple-500 h-7 w-7" />
              ABOUT
            </h2>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
            {/* Left Side - Images */}
            <div className="flex flex-row gap-8 lg:gap-12 items-center justify-center">
              {/* Responsive image layout: stack vertically on small screens, meet at edge on desktop */}
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-center justify-center">
                {/* Force images side by side on all screens, scale responsively */}
                <div className="flex flex-row gap-12 items-center justify-center w-full">
                  {/* First Image - Portrait (tilted right) */}
                  <div className="relative z-10 mr-[-20px] group">
                    <img
                      src="/favicon.jpg"
                      alt="Portrait"
                      className="w-[30vw] max-w-[120px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[230px] aspect-square object-cover rounded-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] transform rotate-[12deg] transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                      style={{ background: "#222" }}
                    />
                  </div>
                  {/* Second Image - Action/Lifestyle (tilted left, meets at edge) */}
                  <div className="relative z-20 ml-[-20px] group">
                    <img
                      src="/image.jpg"
                      alt="Action"
                      className="w-[30vw] max-w-[120px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[230px] aspect-square object-cover rounded-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] transform -rotate-[12deg] transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                      style={{ background: "#222" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <p
                  className={`text-sm leading-relaxed font-sans ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  I'm a self-taught full-stack developer who went from
                  engineering lectures to building real-world web apps. I learn
                  by doing—building projects, contributing to open source, and
                  taking on impactful internships. I’m hooked on solving real
                  problems through code and constantly pushing myself to grow.
                </p>
                <p
                  className={`text-sm leading-relaxed font-sans ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  I'm here to build kickass products that solve real problems
                  and make people's lives easier. I like keeping things simple,
                  fast, and actually useful—while making sure they deliver real
                  impact.
                </p>
              </div>
              {/* Resume Download Button */}
              <div className="pt-6">
                <a
                  href="/PranshuParashar_Resume.pdf"
                  download
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 border-2 font-sans
                    ${
                      isDarkMode
                        ? "bg-transparent border-white/20 hover:border-white/40 hover:bg-white/5"
                        : "bg-transparent border-gray-400 hover:border-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  <DocumentDownloadIcon
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  />
                  <span
                    className={`font-sans font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-black via-zinc-900 to-black"
              : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"
          }`}
        />
        <div className="container mx-auto px-4 relative">
          <h2 className="font-space-grotesk text-3xl font-bold mb-12 flex justify-center items-center tracking-tight">
            <FaProjectDiagram className="mr-4 text-purple-500 h-8 w-8" />
            My Projects
          </h2>
          <div className="max-w-2xl mx-auto space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative transition-all duration-500"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className={`relative pl-6 flex flex-col`}>
                  {/* Project Icon */}
                  <div className="absolute -left-3 top-0 z-10">
                    <DiAtom
                      className={`h-8 w-8 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      } group-hover:text-purple-400 transition-colors duration-300`}
                    />
                  </div>

                  {/* Left vertical line - starts from bottom of icon */}
                  <div
                    className={`absolute left-0 top-8 w-0.5 h-full bg-gradient-to-b ${project.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Project Title */}
                  <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p
                    className={`font-sans ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    } mb-6 text-sm font-light leading-relaxed max-w-xl`}
                  >
                    {project.description}
                  </p>

                  {/* Project Image */}
                  <div className="mb-6 rounded-lg overflow-hidden max-w-xl">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02] shadow-xl"
                      />
                    </a>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`font-sans px-2 py-1 text-xs ${
                          isDarkMode ? "bg-white/10" : "bg-black/10"
                        } rounded-full font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Code Link */}
                  <div className="mb-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-sans ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-black"
                      } transition-colors duration-300`}
                    >
                      <FaGithub className="h-4 w-4" />
                      View Code
                    </a>
                  </div>

                  {/* View Project Button */}
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-lg font-normal text-base font-sans transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 hover:bg-white/20 text-white border border-gray-700 hover:border-gray-600"
                          : "bg-black/10 hover:bg-black/20 text-black border border-gray-300 hover:border-gray-400"
                      } group-hover:transform group-hover:scale-105 min-w-[160px]`}
                    >
                      <FaEye className="h-4 w-4" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 relative">
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-black" : "bg-gray-100"
          }`}
        />
        <div className="container mx-auto px-4 relative">
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 flex items-center justify-center tracking-tight">
            <TerminalIcon className="mr-4 h-8 w-8 text-blue-400" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { tech: "Express.js", Icon: SiExpress },
              { tech: "MongoDB", Icon: SiMongodb },
              { tech: "Firebase Firestore", Icon: SiFirebase },
              { tech: "InfluxDB", Icon: SiInfluxdb },
              { tech: "Raspberry Pi", Icon: SiRaspberrypi },
              { tech: "ESP32", Icon: SiEspressif },
              { tech: "React Native", Icon: SiReact },
              { tech: "Next.js", Icon: SiNextdotjs },
              { tech: "TypeScript", Icon: SiTypescript },
              { tech: "Tailwind CSS", Icon: SiTailwindcss },
              { tech: "Socket.IO", Icon: SiSocketdotio },
              { tech: "Docker", Icon: SiDocker },
              { tech: "AWS Lambda", Icon: SiAwslambda },
              { tech: "TensorFlow", Icon: SiTensorflow },
              { tech: "Prisma ORM", Icon: SiPrisma },
              { tech: "Node.js", Icon: SiNodedotjs },
              { tech: "Redux", Icon: SiRedux },
              { tech: "GraphQL", Icon: SiGraphql },
            ].map(({ tech, Icon }) => (
              <div
                key={tech}
                className={`font-sans group flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg border ${
                  isDarkMode
                    ? "border-gray-800 hover:border-gray-600"
                    : "border-gray-200 hover:border-gray-400"
                } transition-all duration-300 hover:bg-white/5 w-[calc(50%-1rem)] sm:w-auto`}
              >
                <Icon
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } group-hover:text-blue-400 transition-colors duration-300`}
                />
                <span
                  className={`text-sm sm:text-base ${
                    isDarkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-700 group-hover:text-gray-900"
                  } transition-colors duration-300 font-light font-sans`}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
