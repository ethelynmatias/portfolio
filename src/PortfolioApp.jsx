import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Calendar,
  Download,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

// Inline styles as fallback
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    display: 'flex',
    fontFamily: "'Poppins', serif"
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '320px',
    backgroundColor: 'white',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    zIndex: 50
  },
  sidebarMobile: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s'
  },
  sidebarMobileOpen: {
    transform: 'translateX(0)'
  },
  mainContent: {
    flex: 1,
    marginLeft: '320px'
  },
  profileImage: {
    width: '128px',
    height: '128px',
    margin: '0 auto 16px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    padding: '4px'
  },
  profileImageInner: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'white',
    padding: '4px'
  },
  section: {
    padding: '80px 32px',
  },
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '32px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.85))',
    zIndex: 1
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '768px'
  },
  button: {
    padding: '12px 32px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '8px'
  },
  buttonOutline: {
    padding: '12px 32px',
    backgroundColor: 'transparent',
    color: '#2563eb',
    border: '2px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '8px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    marginBottom: '24px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '32px'
  },
  mobileMenuButton: {
    display: 'none',
    position: 'fixed',
    top: '16px',
    left: '16px',
    padding: '8px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    border: 'none',
    cursor: 'pointer',
    zIndex: 60
  }
};

// Media query styles for mobile
const mobileStyles = `
  @media (max-width: 1024px) {
    .sidebar { transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); }
    .main-content { margin-left: 0 !important; }
    .mobile-menu-button { display: block !important; }
  }
`;

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Portfolio items - Update image paths when you add real images to /public/images/portfolio/
  const portfolioItems = [
    { 
      id: 1, 
      category: 'web', 
      // Replace with: image: '/images/portfolio/ecommerce.jpg'
      image: 'https://via.placeholder.com/400x300/4F46E5/ffffff?text=E-Commerce', 
      title: 'E-Commerce Platform' 
    },
    { 
      id: 2, 
      category: 'mobile', 
      // Replace with: image: '/images/portfolio/mobile-app.jpg'
      image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Mobile+App', 
      title: 'Banking Mobile App' 
    },
    { 
      id: 3, 
      category: 'web', 
      // Replace with: image: '/images/portfolio/dashboard.jpg'
      image: 'https://via.placeholder.com/400x300/DC2626/ffffff?text=Dashboard', 
      title: 'Analytics Dashboard' 
    },
    { 
      id: 4, 
      category: 'design', 
      // Replace with: image: '/images/portfolio/ui-design.jpg'
      image: 'https://via.placeholder.com/400x300/7C3AED/ffffff?text=UI+Design', 
      title: 'UI/UX Design System' 
    },
    { 
      id: 5, 
      category: 'web', 
      // Replace with: image: '/images/portfolio/crm.jpg'
      image: 'https://via.placeholder.com/400x300/EA580C/ffffff?text=CRM', 
      title: 'CRM System' 
    },
    { 
      id: 6, 
      category: 'mobile', 
      // Replace with: image: '/images/portfolio/healthcare.jpg'
      image: 'https://via.placeholder.com/400x300/0891B2/ffffff?text=Health+App', 
      title: 'Healthcare App' 
    },
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
    <>
      <style>{mobileStyles}</style>
      <div style={styles.container}>
        {/* Sidebar */}
        <aside 
          className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}
          style={{
            ...styles.sidebar,
            ...(window.innerWidth <= 1024 && !isMobileMenuOpen ? styles.sidebarMobile : {}),
            ...(window.innerWidth <= 1024 && isMobileMenuOpen ? styles.sidebarMobileOpen : {})
          }}
        >
          <div style={{ padding: '32px' }}>
            {/* Profile Section */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={styles.profileImage}>
                <div style={styles.profileImageInner}>
                  <img
                    src="/images/profile/ethelynMatias.jpeg"
                    alt="Ethelyn Matias Profile"
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/profile/ethelynMatias.jpeg";
                    }}
                  />
                </div>
              </div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
                Ethelyn Matias
              </h1>
              <p style={{ color: '#6b7280' }}>Senior IT Developer</p>
              
              {/* Social Links */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
                <a href="https://linkedin.com/in/ethelyn-matias-62900b139" style={{ color: '#6b7280' }}>
                  <Linkedin size={20} />
                </a>
                <a href="#" style={{ color: '#6b7280' }}>
                  <Github size={20} />
                </a>
                <a href="mailto:ethelyn.matias@example.com" style={{ color: '#6b7280' }}>
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <Mail size={16} style={{ marginRight: '12px', color: '#9ca3af' }} />
                <span style={{ fontSize: '14px', color: '#6b7280' }}>ethelyn.matias@example.com</span>
              </div>
            
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MapPin size={16} style={{ marginRight: '12px', color: '#9ca3af' }} />
                <span style={{ fontSize: '14px', color: '#6b7280' }}>Available for Remote</span>
              </div>
            </div>

            {/* Navigation */}
            <nav style={{ marginTop: '32px', borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
              {['home', 'about', 'portfolio', 'experience', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setIsMobileMenuOpen(false);
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 16px',
                    marginBottom: '8px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: activeSection === section ? '#eff6ff' : 'transparent',
                    color: activeSection === section ? '#2563eb' : '#374151',
                    fontWeight: activeSection === section ? '500' : '400',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>

            {/* Download CV Button 
            <button style={{ ...styles.button, width: '100%', marginTop: '32px' }}>
              <Download size={16} style={{ display: 'inline', marginRight: '8px' }} />
              Download Resume
            </button>*/}
          </div>
        </aside>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-button"
          style={styles.mobileMenuButton}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Main Content */}
        <main className="main-content" style={styles.mainContent}>
          {/* Hero Section */}
          <section id="home" style={styles.heroSection}>
            <div style={styles.heroOverlay}></div>
            <div style={styles.heroContent}>
              <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '24px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Hello, I'm <span style={{ color: '#fbbf24' }}>Ethelyn</span>
              </h2>
              <p style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.95)', marginBottom: '32px', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                Need a website? Let’s build it! Contact me to start your project.
              </p>
              <div>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ ...styles.button, backgroundColor: 'white', color: '#2563eb', fontWeight: '600' }}
                >
                  View Portfolio
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ ...styles.buttonOutline, borderColor: 'white', color: 'white', fontWeight: '500' }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" style={{ ...styles.section, backgroundColor: 'white' }}>
            <div style={{ maxWidth: '896px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px' }}>
                About Me
              </h2>
              <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#6b7280', marginBottom: '48px' }}>
                <p style={{ marginBottom: '16px' }}>
                  I am a seasoned IT Developer with over 5 years of experience in designing and implementing 
                  cutting-edge software solutions. My expertise spans across full-stack development, cloud 
                  architecture, and database management.
                </p>
                <p>
                  Passionate about leveraging technology to solve complex business problems, I have successfully 
                  delivered numerous projects ranging from e-commerce platforms to enterprise resource planning 
                  systems.
                </p>
              </div>

              {/* Skills Progress Bars */}
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Technical Skills</h3>
                {skills.map((skill, index) => (
                  <div key={index} style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: '#6b7280' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '12px', backgroundColor: '#e5e7eb', borderRadius: '9999px' }}>
                      <div 
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                          borderRadius: '9999px',
                          width: `${skill.level}%`,
                          transition: 'width 1s'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div style={{ ...styles.grid, marginTop: '48px', paddingTop: '48px', borderTop: '1px solid #e5e7eb' }}>
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '30+', label: 'Happy Clients' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '10+', label: 'Certifications' }
                ].map((stat, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2563eb' }}>{stat.number}</div>
                    <div style={{ color: '#6b7280', marginTop: '8px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" style={{ ...styles.section, backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px' }}>
                Portfolio
              </h2>
              
              {/* Filter Buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
                {['all', 'web', 'mobile', 'design'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: '8px 24px',
                      borderRadius: '9999px',
                      border: 'none',
                      backgroundColor: selectedCategory === category ? '#2563eb' : 'white',
                      color: selectedCategory === category ? 'white' : '#374151',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* Portfolio Grid */}
              <div style={styles.grid}>
                {filteredPortfolio.map((item) => (
                  <div 
                    key={item.id} 
                    style={{
                      ...styles.card,
                      padding: 0,
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '256px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.title}</h3>
                      <p style={{ color: '#6b7280', marginTop: '4px' }}>{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" style={{ ...styles.section, backgroundColor: 'white' }}>
            <div style={{ maxWidth: '896px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }}>
                Work Experience
              </h2>
              {experience.map((job, index) => (
                <div key={index} style={{ ...styles.card, backgroundColor: '#f9fafb' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{job.title}</h3>
                    <span style={{ fontSize: '14px', color: '#6b7280', display: 'flex', alignItems: 'center' }}>
                      <Calendar size={16} style={{ marginRight: '4px' }} />
                      {job.period}
                    </span>
                  </div>
                  <p style={{ color: '#2563eb', fontWeight: '500', margin: '8px 0' }}>{job.company}</p>
                  <p style={{ color: '#6b7280' }}>{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" style={{ ...styles.section, backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '896px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }}>
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} style={styles.card}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <GraduationCap size={32} style={{ color: '#2563eb', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{edu.degree}</h3>
                      <p style={{ color: '#2563eb', fontWeight: '500', marginTop: '4px' }}>{edu.school}</p>
                      <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>{edu.period}</p>
                      <p style={{ color: '#6b7280', marginTop: '12px' }}>{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" style={{ ...styles.section, backgroundColor: 'white' }}>
            <div style={{ maxWidth: '896px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }}>
                Get In Touch
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
                {/* Contact Form */}
                <div>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      style={{
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      style={{
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      style={{
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      style={{
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        resize: 'vertical'
                      }}
                    />
                    <button type="submit" style={{ ...styles.button, margin: 0 }}>
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Let's Connect</h3>
                  <p style={{ color: '#6b7280', marginBottom: '32px' }}>
                    I'm always interested in hearing about new projects and opportunities. 
                    Feel free to reach out!
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Mail size={20} style={{ color: '#2563eb' }} />
                      <span>ethelyn.matias@example.com</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <MapPin size={20} style={{ color: '#2563eb' }} />
                      <span>Available for Remote Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{ padding: '32px', backgroundColor: '#111827', color: 'white', textAlign: 'center' }}>
            <p>&copy; 2024 Ethelyn Matias. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default PortfolioApp;