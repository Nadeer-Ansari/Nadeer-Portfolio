import React, { useState } from 'react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Layout>
        <Sections />
      </Layout>
    </div>
  )
}

// Layout Component
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Tech-Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Nadeer Ansari<span className="text-primary-400">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-primary-400 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-primary-400 transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              <p>&copy; {currentYear} Nadeer Ansari. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

// Social Links Component
const SocialLinks = () => (
  <>
    <a 
      href="https://github.com/Nadeer-Ansari" 
      className="text-slate-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    
    <a 
      href="https://www.linkedin.com/in/nadeer-ansari/" 
      className="text-slate-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>
    
    <a 
      href="https://x.com/NadeerAnsarii" 
      className="text-slate-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      title="Twitter"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
    
    <a 
      href="https://mail.google.com/mail/u/0/?fs=1&to=anadeer13@gmail.com&tf=cm" 
      className="text-slate-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      title="Gmail"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-5.727V12.91L12 16.636l-4.636-3.727V21H1.636A1.636 1.636 0 0 1 0 19.364V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.546l6.545-4.906 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    </a>
  </>
)

// Sections Component
const Sections = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-float mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden border-4 border-white/20">
              <img 
                src="/nadeer.png" 
                alt="Nadeer Ansari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nadeer <span className="text-primary-400">Ansari</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-300 mb-8">
            <span className="typing-animation">Software Engineer | DevOps & Web Developer </span>
          </div>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building automated, scalable systems with Docker, Kubernetes & CI/CD. Passionate about bridging development and operations for reliable, secure infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About <span className="text-primary-400">Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-1">
                <div className="bg-slate-800 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I'm a passionate Software Engineer specializing in DevOps and full-stack development. 
                    I build automated, scalable infrastructure using Docker, Kubernetes, and CI/CD pipelines 
                    to bridge development and operations.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Passionate about creating secure systems that solve real-world problems, from blockchain 
                    voting platforms to fraud detection systems. Constantly exploring cloud-native technologies 
                    and infrastructure automation.
                  </p>
                  
                  {/* Download Resume Button */}
                  <div className="mt-6">
                    <a
                      href="/CV-Nadeer.pdf"
                      download
                      className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Feature Cards */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Clean Code</h4>
                    <p className="text-slate-300 text-sm">Writing maintainable and scalable code that follows best practices</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                    <p className="text-slate-300 text-sm">Always exploring new technologies and creative solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Performance</h4>
                    <p className="text-slate-300 text-sm">Building fast, efficient applications that deliver great user experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "TrustChain - Blockchain Voting",
      description: "A secure blockchain-based voting system ensuring data integrity and transparency in electoral processes using distributed ledger technology.",
      technologies: ["Blockchain", "Ganache", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Nadeer-Ansari/TrustChain",
      demoUrl: "#",
      image: "/trustchain.png"
    },
    {
      title: "Online Fraud Detection System",
      description: "Machine learning-based system to detect and prevent online fraudulent activities using pattern recognition and anomaly detection algorithms.",
      technologies: ["HTML, CSS, JSP" , "Java Servlets", "MySQL", "Apache Tomcat"],
      githubUrl: "https://github.com/Nadeer-Ansari/Fraud-Detection-System",
      demoUrl: "#",
      image: "/online.jpg"
    },
    {
      title: "Node.js Authentication System",
      description: "A secure authentication system built with Node.js featuring user registration, login, and session management with password encryption.",
      technologies: ["Node.js", "MongoDB", "Docker" , "AWS ECR" , "Docker Compose"],
      githubUrl: "https://github.com/Nadeer-Ansari/node-authentication",
      demoUrl: "#",
      image: "/node.png"
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio website built with React and Tailwind CSS showcasing projects and skills with smooth animations.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      githubUrl: "https://github.com/Nadeer-Ansari/nadeer-portfolio",
      demoUrl: "#",
      image: "/portfolio.png"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          My <span className="text-primary-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Professional <span className="text-primary-400">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Cyber Security Internship */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-start gap-6">
              <div className="bg-primary-500/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Cyber Security Student</h3>
                <p className="text-primary-400 text-lg mb-2">
                  <a href="https://cybersakshar.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
                    Cyber Sakshar
                  </a>
                </p>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <span className="flex items-center mr-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Jul 2022 - Oct 2022 · 4 months
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Nashik, Maharashtra, India
                  </span>
                </div>
                <p className="text-slate-300">
                  Completed Cyber Security Internship Program, learning about Threats, Viruses, Phishing, 
                  online scams, Ransomware & introduction about Dark web.
                </p>
              </div>
            </div>
          </div>

          {/* Web Developer Internship */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-start gap-6">
              <div className="bg-primary-500/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Web Developer</h3>
                <p className="text-primary-400 text-lg mb-2">
                  <a href="https://sumagoinfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
                    Sumago Infotech Pvt. Ltd.
                  </a>
                </p>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <span className="flex items-center mr-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Jun 2020 - Aug 2020 · 3 months
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Nashik, Maharashtra, India
                  </span>
                </div>
                <p className="text-slate-300">
                  Learned and worked with HTML, CSS, PHP, MySQL & Bootstrap for web development projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Education Section
const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Education & <span className="text-primary-400">Qualifications</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* BE Education */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-start gap-6">
              <div className="bg-primary-500/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering in Computer Engineering</h3>
                <p className="text-primary-400 text-lg mb-2">Gokhale Education Society's R. H. Sapat College of Engineering</p>
                <p className="text-slate-300 mb-2">Savitribai Phule Pune University (SPPU)</p>
                <div className="flex items-center text-slate-300 text-sm mb-4 flex-wrap gap-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2022 - 2025
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Nashik, Maharashtra
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    CGPA: 7.02/10 · First Class
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Diploma Education */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-start gap-6">
              <div className="bg-primary-500/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Diploma in Computer Engineering</h3>
                <p className="text-primary-400 text-lg mb-2">KVN Naik SPS' Loknete Gopinathji Munde Institute of Engineering Education & Research</p>
                <div className="flex items-center text-slate-300 text-sm mb-4 flex-wrap gap-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2018 - 2021
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Nashik, Maharashtra
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    87.20% · First Class with Distinction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Tech Stack Section
const Skills = () => {
  const skills = [
    { name: "Java", icon: "☕", level: 85 },
    { name: "Python", icon: "🐍", level: 90 },
    { name: "Docker", icon: "🐳", level: 80 },
    { name: "Jenkins", icon: "⚙️", level: 78 },
    { name: "Linux", icon: "🐧", level: 85 },
    { name: "Git", icon: "📝", level: 90 },
    { name: "GitHub", icon: "🐙", level: 88 },
    { name: "MySQL", icon: "🐬", level: 80 },
    { name: "HTML", icon: "🌐", level: 95 },
    { name: "CSS", icon: "🎨", level: 90 },
    { name: "Cybersecurity", icon: "🔒", level: 75 }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Tech <span className="text-primary-400">Stack</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-slate-400 text-sm mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 transition-transform duration-300 hover:scale-105">
    <div className="h-48 bg-slate-700 flex items-center justify-center overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a 
          href={project.githubUrl}
          className="flex items-center text-slate-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </a>
        <a 
          href={project.demoUrl}
          className="flex items-center text-slate-300 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Demo
        </a>
      </div>
    </div>
  </div>
)

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Get In <span className="text-primary-400">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
              "I'm actively seeking full-time opportunities in Software Engineering and DevOps roles,
              passionate about building robust, automated systems and scalable infrastructure."
              </p>
              
          <div className="space-y-4">
            <div className="flex items-center text-slate-300">
              <svg className="w-5 h-5 mr-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>anadeer13@gmail.com</span>
            </div>
            
            <div className="flex items-center text-slate-300">
              <svg className="w-5 h-5 mr-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 91304 19323</span>
            </div>
            
            <div className="flex items-center text-slate-300">
              <svg className="w-5 h-5 mr-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Nashik, India | Remote Work</span>
            </div>
          </div>
              
              <div className="mt-8 flex space-x-4">
                <SocialLinks />
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App