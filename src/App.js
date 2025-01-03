import React, { useState, useEffect } from "react";
import {
  AcademicCapIcon,
  MailIcon,
  LinkIcon,
  CodeIcon,
  UserCircleIcon,
  BadgeCheckIcon,
  ArrowRightIcon,
  TerminalIcon,
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
  SiD3Dotjs,
  SiPrisma,
  SiNodedotjs,
  SiRedux,
  SiGraphql,
} from "react-icons/si";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const App = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Farm Automation System",
      description: "IoT-driven polyhouse management with realtime monitoring for crop-specific optimization.",
      tech: ["React Native", "Node.js", "MongoDB", "ESP32"],
      github: "https://github.com/drockparashar/FarmAutomation-App",
      gradient: "from-green-500 via-blue-400 to-purple-500",
    },
    {
      title: "Unity Docs",
      description: "Realtime collaborative text editor",
      tech: ["Quill.js", "Node.js", "Socket.IO", "MongoDB"],
      github: "https://github.com/drockparashar/unity-docs",
      gradient: "from-rose-500 via-red-400 to-orange-300",
    },
    {
      title: "RecapTube Extension",
      description: "Chrome extension to summarize YouTube videos",
      tech: ["Node.js", "Gemini", "Express.js"],
      github: "https://github.com/drockparashar/recapTube-extension",
      gradient: "from-emerald-500 via-teal-400 to-cyan-300",
    },
    {
      title: "Git Deployer",
      description: "Effortlessly launch your react creations onto the web",
      tech: ["Node.js", "Redis", "S3", "TypeScript"],
      github: "https://github.com/drockparashar/git-deployer",
      gradient: "from-emerald-500 via-teal-400 to-cyan-300",
    },
  ];

  const phrases = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Full Stack Developer",
    "App Developer",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_40%)] opacity-70" />
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Hi, I'm Pranshu Parashar
          </h1>
          <p className="text-2xl text-gray-300 mb-16 h-8">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">
              {currentText}
            </span>
            <span className="animate-blink">|</span>
          </p>
          <div className="flex justify-center gap-8">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/drockparashar",
                color: "hover:text-gray-400",
                tooltip: "GitHub",
              },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/pranshu-parashar-443859249/",
                color: "hover:text-blue-500",
                tooltip: "LinkedIn",
              },
              {
                icon: FaTwitter,
                link: "https://x.com/PranshuParasha4",
                color: "hover:text-blue-400",
                tooltip: "Twitter",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/drock_parashar/",
                color: "hover:text-pink-400",
                tooltip: "Instagram",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`transform hover:scale-110 transition-all duration-300 ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.tooltip}
              >
                <social.icon className="h-8 w-8 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-12 flex items-center">
            <CodeIcon className="mr-4 text-purple-500 h-8 w-8" />
            My Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative p-8 backdrop-blur-sm bg-white/5 border border-gray-800 rounded-xl">
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white group"
                    >
                      <LinkIcon className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-black" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-12 flex items-center justify-center">
            <TerminalIcon className="mr-4 h-8 w-8 text-blue-400" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
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
                className="group flex items-center gap-4 p-3 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:bg-white/5"
              >
                <Icon className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      {/* <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_40%)] opacity-70" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Always excited to collaborate on innovative projects and explore new
            opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block relative group px-8 py-4 rounded-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-white font-medium group-hover:text-white transition-colors duration-300">
              Get in Touch
            </span>
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default App;
