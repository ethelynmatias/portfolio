import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Calendar,
  Download,
  Briefcase,
  GraduationCap,
  User,
  Grid3x3,
  Award,
  Menu,
  X
} from 'lucide-react';
import AnimatedHeading from './components/AnimatedHeading';
import ScrollAnimation from './components/ScrollAnimation';
import ContactForm from './components/ContactForm';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const portfolioItems = [
    { id: 1, category: 'web', image: 'https://via.placeholder.com/400x300/4F46E5/ffffff?text=E-Commerce', title: 'E-Commerce Platform' },
    { id: 2, category: 'mobile', image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Mobile+App', title: 'Banking Mobile App' },
    { id: 3, category: 'web', image: 'https://via.placeholder.com/400x300/DC2626/ffffff?text=Dashboard', title: 'Analytics Dashboard' },
    { id: 4, category: 'design', image: 'https://via.placeholder.com/400x300/7C3AED/ffffff?text=UI+Design', title: 'UI/UX Design System' },
    { id: 5, category: 'web', image: 'https://via.placeholder.com/400x300/EA580C/ffffff?text=CRM', title: 'CRM System' },
    { id: 6, category: 'mobile', image: 'https://via.placeholder.com/400x300/0891B2/ffffff?text=Health+App', title: 'Healthcare App' },
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const experience = [
    {
      title: 'Senior IT Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications, managing cloud infrastructure, and mentoring junior developers.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and Node.js. Implemented RESTful APIs and database solutions.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2018 - 2020',
      description: 'Worked on various client projects, focusing on front-end development and UI/UX implementation.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      description: 'Graduated with honors. Focus on software engineering and database management.'
    },
    {
      degree: 'IT Certifications',
      school: 'Various Institutions',
      period: '2018 - Present',
      description: 'AWS Certified Developer, Microsoft Azure Fundamentals, Google Cloud Professional'
    }
  ];

  const skills = [
    { name: 'JavaScript/React', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python/Django', level: 80 },
    { name: 'SQL/NoSQL', level: 85 },
    { name: 'AWS/Cloud', level: 75 },
    { name: 'UI/UX Design', level: 70 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-0 left-0 h-screen w-80 bg-white shadow-xl z-50 transition-transform duration-300 overflow-y-auto`}>
          <div className="p-8">
            {/* Profile Section */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white p-1">
                  <img
                    src="/images/profile/ethelynMatias.jpeg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Ethelyn Matias</h1>
              <p className="text-lg text-gray-600 mt-2">Senior IT Developer</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://linkedin.com/in/ethelyn-matias-62900b139" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/ethelynmatias" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:ethelyn.matias2017@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center text-base">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-600">ethelyn.matias2017@gmail.com</span>
              </div>
              <div className="flex items-center text-base">
                <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-600">Available for Remote</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-8 border-t pt-6">
              <ul className="space-y-2">
                {['home', 'about', 'portfolio', 'experience', 'education', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => {
                        setActiveSection(section);
                        setIsMobileMenuOpen(false);
                        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-lg ${
                        activeSection === section 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Download CV Button */}
            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-8">
            <div className="text-center max-w-3xl">
              <AnimatedHeading />
              <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                Need a website? Let’s build it! Contact me to start your project.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 transform"
                >
                  View Portfolio
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-all hover:scale-105 transform"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation animation="fadeUp">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeUp" delay={100}>
                <div className="prose prose-lg text-gray-600 mb-12">
                <p className="mb-4">
                  I am a seasoned IT Developer with over 5 years of experience in designing and implementing 
                  cutting-edge software solutions. My expertise spans across full-stack development, cloud 
                  architecture, and database management.
                </p>
                <p>
                  Passionate about leveraging technology to solve complex business problems, I have successfully 
                  delivered numerous projects ranging from e-commerce platforms to enterprise resource planning 
                  systems. I thrive in collaborative environments and am committed to continuous learning and 
                  staying current with emerging technologies.
                </p>
              </div>

              {/* Skills Progress Bars */}
              <ScrollAnimation animation="fadeUp" delay={200}>
                <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </ScrollAnimation>

              {/* Stats */}
              <ScrollAnimation animation="fadeUp" delay={300}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">30+</div>
                  <div className="text-gray-600 mt-2">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600 mt-2">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 mt-2">Certifications</div>
                </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="py-20 px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation animation="fadeUp">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Portfolio</h2>
              </ScrollAnimation>
              
              {/* Filter Buttons */}
              <ScrollAnimation animation="fadeUp" delay={100}>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['all', 'web', 'mobile', 'design'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
                </div>
              </ScrollAnimation>

              {/* Portfolio Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPortfolio.map((item, index) => (
                  <ScrollAnimation animation="scale" delay={200 + index * 100} key={item.id}>
                    <div 
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <div>
                          <h3 className="text-white text-xl font-bold">{item.title}</h3>
                          <p className="text-gray-300 mt-1">{item.category}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className="text-sm text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.period}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-20 px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium mt-1">{edu.school}</p>
                        <p className="text-sm text-gray-600 mt-2">{edu.period}</p>
                        <p className="text-gray-600 mt-3">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation animation="fadeUp">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
              </ScrollAnimation>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <ScrollAnimation animation="fadeLeft" delay={100}>
                  <div>
                    <ContactForm />
                  </div>
                </ScrollAnimation>

                {/* Contact Info */}
                <ScrollAnimation animation="fadeRight" delay={200}>
                  <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Connect</h3>
                    <p className="text-gray-600">
                      I'm always interested in hearing about new projects and opportunities. 
                      Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">ethelyn.matias@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Available for Remote Work Worldwide</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a href="https://linkedin.com/in/ethelyn-matias-62900b139" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <Linkedin className="w-5 h-5 text-gray-700" />
                      </a>
                      <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Github className="w-5 h-5 text-gray-700" />
                      </a>
                      <a href="mailto:ethelyn.matias@example.com" className="p-3 bg-gray-100 rounded-lg hover:bg-red-50 transition-colors">
                        <Mail className="w-5 h-5 text-gray-700" />
                      </a>
                    </div>
                  </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-8 bg-gray-900 text-white text-center">
            <p>&copy; 2024 Ethelyn Matias. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;