import React, { useState, useEffect } from "react";
import {
  AcademicCapIcon,
  MailIcon,
  LinkIcon,
  CodeIcon,
  UserCircleIcon,
  BadgeCheckIcon,
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
      title: "Farm Automation System",
      description:
        "IoT-driven polyhouse management with realtime monitoring for crop-specific optimization.",
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
      } overflow-x-hidden font-inter`}
    >
      {/* Scroll to top button */}
      {scrollPosition > 500 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-all duration-300 z-50"
        >
          <ArrowUpIcon className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Theme Toggle Button */}
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

        {/* Desktop Social Links - Side */}
        <div className="hidden lg:flex fixed left-8 top-0 h-full items-center">
          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-500 to-gray-300"></div>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`group relative p-3 rounded-lg backdrop-blur-sm hover:bg-white/10 transform hover:scale-110 transition-all duration-300`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.tooltip}
              >
                <social.icon
                  className={`h-7 w-7 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } ${social.color} transition-colors duration-300`}
                />
                <span className="absolute left-full ml-3 px-3 py-2 bg-white/10 backdrop-blur-sm rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.label}
                </span>
              </a>
            ))}
            <div className="w-px h-32 bg-gradient-to-t from-transparent via-gray-500 to-gray-300"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="font-space-grotesk text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient tracking-tight">
            Hi, I'm Pranshu Parashar
          </h1>
          <p
            className={`font-inter text-2xl ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            } mb-16 h-8 font-light`}
          >
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium">
              {currentText}
            </span>
            <span className="animate-blink">|</span>
          </p>

          {/* Mobile Social Links */}
          <div className="lg:hidden flex justify-center gap-6 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`group relative p-3 rounded-lg backdrop-blur-sm hover:bg-white/10 transform hover:scale-110 transition-all duration-300`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.tooltip}
              >
                <social.icon
                  className={`h-6 w-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } ${social.color} transition-colors duration-300`}
                />
                <span className="absolute -bottom-full left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Add About Section right after Hero Section */}
      {/* About Me Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-black via-zinc-900 to-black"
              : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"
          }`}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 rounded-xl overflow-hidden ring-2 ring-gray-800 group-hover:ring-purple-500 transition-all duration-300">
                  <img
                    src="/favicon.jpg"
                    alt="Pranshu Parashar"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <AcademicCapIcon className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="lg:w-2/3 space-y-6">
              <h2 className="font-space-grotesk text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                About Me
              </h2>

              <div
                className={`space-y-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                <p className="text-lg leading-relaxed">
                  I'm{" "}
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Pranshu Parashar
                  </span>
                  , a passionate Full Stack Developer creating innovative
                  digital solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  Specializing in modern web technologies, I transform complex
                  ideas into clean, efficient applications that solve real-world
                  problems.
                </p>
              </div>

              {/* Resume Download Section */}
              <div className="flex items-center space-x-4">
                <a
                  href="/PranshuParashar_Resume.pdf"
                  download
                  className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-purple-500 transition-all duration-300"
                >
                  <DocumentDownloadIcon className="h-6 w-6 text-blue-400 group-hover:text-purple-500 transition-colors" />
                  <span
                    className={`group-hover:text-white transition-colors  ${
                      isDarkMode ? "text-gray-300" : "text-gray-800"
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

      {/* About Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-black via-zinc-900 to-black"
              : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"
          }`}
        />
        <div className="container mx-auto px-4 relative">
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 flex items-center tracking-tight">
            <CodeIcon className="mr-4 text-purple-500 h-8 w-8" />
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div
                  className={`relative p-6 sm:p-8 backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-white/5 border border-gray-800"
                      : "bg-black/5 border border-gray-200"
                  } rounded-xl`}
                >
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                  <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p
                    className={`font-inter ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-4 text-sm sm:text-base font-light leading-relaxed`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`font-inter px-3 py-1 text-sm ${
                          isDarkMode ? "bg-white/5" : "bg-black/5"
                        } rounded-full font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className={`flex items-center gap-2 ${
                        isDarkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      } group`}
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
                className={`font-inter group flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg border ${
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
                  } transition-colors duration-300 font-light`}
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
