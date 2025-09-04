import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Calendar,
  Download,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  GraduationCap,
  Award,
  FolderOpen,
  MessageSquare,
  ChevronRight,
  Globe,
  Code,
  Palette,
  Smartphone
} from 'lucide-react';

// Typewriter component for animated text
const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {displayText}
      <span style={{
        borderRight: '3px solid',
        animation: 'blink 0.75s step-end infinite',
        marginLeft: '2px'
      }}>
        {currentIndex < text.length ? '' : ''}
      </span>
    </span>
  );
};

function CVPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'education', 'experience', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'work', label: 'Work', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive and modern web applications using latest technologies'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications'
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side applications'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces'
    }
  ];

  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Angular', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'PHP Frameworks', level: 95 },
    { name: 'MySQL', level: 95 },
    { name: 'PostgreSQL', level: 95 },
    { name: 'AWS Server', level: 95 }
  ];

  const education = [
    {
      year: '2014-2018',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      description: 'Graduated with honors, focused on software engineering and web development'
    },
    {
      year: '2018-2020',
      degree: 'Master of Information Technology',
      school: 'Tech Institute',
      description: 'Specialized in cloud computing and distributed systems'
    }
  ];

  const experience = [
    {
      year: '2022-Present',
      title: 'Senior IT Developer',
      company: 'Tech Solutions Inc.',
      description: 'Lead developer for enterprise applications, managing cloud infrastructure'
    },
    {
      year: '2020-2022',
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      description: 'Developed responsive web applications using React and Node.js'
    },
    {
      year: '2018-2020',
      title: 'Junior Developer',
      company: 'StartUp Hub',
      description: 'Worked on various client projects focusing on frontend development'
    }
  ];

  /*
  const portfolioItems = [
    { id: 1, category: 'web', image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Web+App', title: 'E-Commerce Platform' },
    { id: 2, category: 'mobile', image: 'https://via.placeholder.com/400x300/f687b3/ffffff?text=Mobile+App', title: 'Banking App' },
    { id: 3, category: 'design', image: 'https://via.placeholder.com/400x300/4fd1c5/ffffff?text=UI+Design', title: 'Dashboard Design' },
    { id: 4, category: 'web', image: 'https://via.placeholder.com/400x300/fbb6ce/ffffff?text=Web+Portal', title: 'Admin Portal' },
    { id: 5, category: 'mobile', image: 'https://via.placeholder.com/400x300/b794f4/ffffff?text=iOS+App', title: 'Fitness Tracker' },
    { id: 6, category: 'web', image: 'https://via.placeholder.com/400x300/81e6d9/ffffff?text=SaaS+App', title: 'SaaS Platform' }
  ];*/

  const portfolioItems = [
    
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '19px'
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: '#000',
        color: '#fff',
        position: 'fixed',
        height: '100vh',
        left: isSidebarOpen ? '0' : '-260px',
        transition: 'left 0.3s ease',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        ...(window.innerWidth > 991 && { left: '0' })
      }}>
        {/* Profile Section */}
        <div style={{
          padding: '40px 30px 30px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 20px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '5px solid rgba(255,255,255,0.1)'
          }}>
            <img
              src="/images/profile/ethelynMatias.jpeg"
              alt="Ethelyn Matias"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/120/667eea/ffffff?text=EM';
              }}
            />
          </div>
          <h3 style={{ 
            fontSize: '22px', 
            marginBottom: '10px',
            fontWeight: '600'
          }}>
            Ethelyn Matias
          </h3>
          <p style={{ 
            fontSize: '13px', 
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '0'
          }}>
            Senior IT Developer
          </p>
        </div>

        {/* Navigation */}
        <nav style={{
          flex: 1,
          padding: '30px 0',
          overflowY: 'auto'
        }}>
          {navigationItems.map(item => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  if (window.innerWidth <= 991) {
                    setIsSidebarOpen(false);
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 30px',
                  color: activeSection === item.id ? '#fff' : 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '17px',
                  borderLeft: activeSection === item.id ? '2px solid #667eea' : '2px solid transparent',
                  backgroundColor: activeSection === item.id ? 'rgba(102,126,234,0.1)' : 'transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon size={18} style={{ marginRight: '12px' }} />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div style={{
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '15px',
            marginBottom: '15px' 
          }}>
            <a href="https://linkedin.com/in/ethelyn-matias-62900b139" 
               style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
               onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
              <Linkedin size={18} />
            </a>
            <a href="https://github.com" 
               style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
               onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
              <Github size={18} />
            </a>
            <a href="mailto:ethelyn.matias@example.com" 
               style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
               onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
              <Mail size={18} />
            </a>
          </div>
          <p style={{ 
            fontSize: '12px', 
            color: 'rgba(255,255,255,0.4)',
            margin: '0'
          }}>
            © 2024 All rights reserved
          </p>
        </div>
      </aside>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          display: window.innerWidth <= 991 ? 'block' : 'none',
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1001,
          backgroundColor: '#667eea',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px',
          cursor: 'pointer'
        }}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <main style={{
        flex: 1,
        marginLeft: window.innerWidth > 991 ? '260px' : '0',
        transition: 'margin-left 0.3s ease'
      }}>
        {/* Home Section */}
        <section id="home" style={{
          minHeight: '100vh',
          backgroundImage: 'url("https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
          position: 'relative'
        }}>
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
            zIndex: 1
          }}></div>
          <div style={{ 
            textAlign: 'center',
            maxWidth: '800px',
            color: '#fff',
            position: 'relative',
            zIndex: 2
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              marginBottom: '20px',
              animation: 'fadeInUp 1s ease'
            }}>
              <TypewriterText text="Hi, I'm Ethelyn" delay={150} />
            </h1>
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              marginBottom: '30px',
              opacity: '0.9',
              animation: 'fadeInUp 1s ease 0.2s both'
            }}>
              Senior IT Developer & Full Stack Engineer
            </p>
            <p style={{
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              opacity: '0.8',
              lineHeight: '1.6',
              animation: 'fadeInUp 1s ease 0.4s both'
            }}>
              Need a website? Let’s build it! Contact me to start your project.
            </p>
            <div style={{ animation: 'fadeInUp 1s ease 0.6s both' }}>
              <a 
                href="#contact"
                style={{
                  display: 'inline-block',
                  padding: '14px 35px',
                  backgroundColor: '#fff',
                  color: '#667eea',
                  textDecoration: 'none',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '19px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  marginRight: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Hire Me
              </a>
              <a 
                href="#work"
                style={{
                  display: 'inline-block',
                  padding: '14px 35px',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  textDecoration: 'none',
                  border: '2px solid #fff',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '19px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          padding: '100px 40px',
          backgroundColor: '#fff'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#2c3e50'
            }}>
              About Me
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#667eea',
              margin: '0 auto 50px'
            }}></div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? '1fr 2fr' : '1fr',
              gap: '50px',
              alignItems: 'center'
            }}>
              <div>
                <img
                  src="/images/profile/ethelynMatias.jpeg"
                  alt="About Me"
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/667eea/ffffff?text=Ethelyn';
                  }}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: '28px',
                  marginBottom: '20px',
                  color: '#2c3e50'
                }}>
                  Senior IT Developer & Problem Solver
                </h3>
                <p style={{
                  fontSize: '19px',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '20px'
                }}>
                  I am a passionate IT professional with over 5 years of experience in developing 
                  innovative solutions for complex business challenges. My expertise spans across 
                  full-stack development, cloud architecture, and modern web technologies.
                </p>
                <p style={{
                  fontSize: '19px',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '30px'
                }}>
                  I thrive in collaborative environments and am committed to continuous learning, 
                  staying current with emerging technologies, and delivering high-quality solutions 
                  that exceed client expectations.
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth > 576 ? 'repeat(2, 1fr)' : '1fr',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  
                  <div>
                    <strong style={{ color: '#2c3e50' }}>Location:</strong>
                    <span style={{ color: '#666', marginLeft: '10px' }}>Available for Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{
          padding: '100px 40px',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#2c3e50'
            }}>
              My Services
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#667eea',
              margin: '0 auto 50px'
            }}></div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
              gap: '30px'
            }}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} style={{
                    backgroundColor: '#fff',
                    padding: '40px 30px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(102,126,234,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                  }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      margin: '0 auto 20px',
                      backgroundColor: 'rgba(102,126,234,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={30} style={{ color: '#667eea' }} />
                    </div>
                    <h3 style={{
                      fontSize: '22px',
                      marginBottom: '15px',
                      color: '#2c3e50'
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{
          padding: '100px 40px',
          backgroundColor: '#fff'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#2c3e50'
            }}>
              My Skills
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#667eea',
              margin: '0 auto 50px'
            }}></div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '40px'
            }}>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}>
                    <span style={{
                      fontSize: '19px',
                      fontWeight: '600',
                      color: '#2c3e50'
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontSize: '19px',
                      fontWeight: '600',
                      color: '#667eea'
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    height: '10px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '5px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      backgroundColor: '#667eea',
                      borderRadius: '5px',
                      transition: 'width 2s ease',
                      animation: 'progressBar 2s ease'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" style={{
          padding: '100px 40px',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#2c3e50'
            }}>
              Education
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#667eea',
              margin: '0 auto 50px'
            }}></div>
            
            <div style={{ position: 'relative' }}>
              {education.map((edu, index) => (
                <div key={index} style={{
                  display: 'flex',
                  marginBottom: '40px',
                  position: 'relative'
                }}>
                  <div style={{
                    minWidth: '150px',
                    marginRight: '40px'
                  }}>
                    <span style={{
                      backgroundColor: '#667eea',
                      color: '#fff',
                      padding: '8px 20px',
                      borderRadius: '30px',
                      fontSize: '17px',
                      fontWeight: '600'
                    }}>
                      {edu.year}
                    </span>
                  </div>
                  <div style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '-8px',
                      top: '15px',
                      width: '0',
                      height: '0',
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderRight: '8px solid #fff'
                    }}></div>
                    <h3 style={{
                      fontSize: '22px',
                      marginBottom: '10px',
                      color: '#2c3e50'
                    }}>
                      {edu.degree}
                    </h3>
                    <h4 style={{
                      fontSize: '19px',
                      color: '#667eea',
                      marginBottom: '15px',
                      fontWeight: '600'
                    }}>
                      {edu.school}
                    </h4>
                    <p style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{
          padding: '100px 40px',
          backgroundColor: '#fff'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#2c3e50'
            }}>
              Experience
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#667eea',
              margin: '0 auto 50px'
            }}></div>
            
            <div style={{ position: 'relative' }}>
              {experience.map((exp, index) => (
                <div key={index} style={{
                  display: 'flex',
                  marginBottom: '40px',
                  position: 'relative',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}>
                  <div style={{
                    minWidth: '150px',
                    marginLeft: index % 2 === 0 ? '0' : '40px',
                    marginRight: index % 2 === 0 ? '40px' : '0',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <span style={{
                      backgroundColor: '#667eea',
                      color: '#fff',
                      padding: '8px 20px',
                      borderRadius: '30px',
                      fontSize: '17px',
                      fontWeight: '600'
                    }}>
                      {exp.year}
                    </span>
                  </div>
                  <div style={{
                    flex: 1,
                    backgroundColor: '#f8f9fa',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: index % 2 === 0 ? '-8px' : 'auto',
                      right: index % 2 === 0 ? 'auto' : '-8px',
                      top: '15px',
                      width: '0',
                      height: '0',
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderLeft: index % 2 === 0 ? 'none' : '8px solid #f8f9fa',
                      borderRight: index % 2 === 0 ? '8px solid #f8f9fa' : 'none'
                    }}></div>
                    <h3 style={{
                      fontSize: '22px',
                      marginBottom: '10px',
                      color: '#2c3e50'
                    }}>
                      {exp.title}
                    </h3>
                    <h4 style={{
                      fontSize: '19px',
                      color: '#667eea',
                      marginBottom: '15px',
                      fontWeight: '600'
                    }}>
                      {exp.company}
                    </h4>
                    <p style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work/Portfolio Section */}
        <section id="work" style={{
          padding: '100px 40px',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#2c3e50'
            }}>
              My Work
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#667eea',
              margin: '0 auto 50px'
            }}></div>
            
            {/* Filter Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '50px'
            }}>
              {['all', 'web', 'mobile', 'design'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '10px 25px',
                    backgroundColor: selectedCategory === category ? '#667eea' : 'transparent',
                    color: selectedCategory === category ? '#fff' : '#666',
                    border: `2px solid ${selectedCategory === category ? '#667eea' : '#dee2e6'}`,
                    borderRadius: '30px',
                    fontSize: '17px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = '#667eea';
                      e.currentTarget.style.color = '#667eea';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = '#dee2e6';
                      e.currentTarget.style.color = '#666';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Portfolio Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
              gap: '30px'
            }}>
              {filteredPortfolio.length > 0 ? filteredPortfolio.map((item, index) => (
                <div key={item.id} style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                  e.currentTarget.querySelector('.overlay').style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                  e.currentTarget.querySelector('.overlay').style.opacity = '0';
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    className="overlay"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      backgroundColor: 'rgba(102,126,234,0.9)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: '0',
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <h3 style={{
                      color: '#fff',
                      fontSize: '22px',
                      marginBottom: '10px'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: '#fff',
                      fontSize: '17px',
                      textTransform: 'uppercase',
                      letterSpacing: '2px'
                    }}>
                      {item.category}
                    </p>
                  </div>
                </div>
              )) : (
                <div style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '80px 20px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '10px',
                  border: '2px dashed #dee2e6'
                }}>
                  <div style={{
                    fontSize: '60px',
                    marginBottom: '20px'
                  }}>
                    🚀
                  </div>
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '15px'
                  }}>
                    Coming Soon
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    color: '#666',
                    maxWidth: '500px',
                    margin: '0 auto'
                  }}>
                    Exciting projects are in the works! Check back soon to see my latest portfolio pieces and case studies.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: '100px 40px',
          backgroundColor: '#fff'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#2c3e50'
            }}>
              Contact Me
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: '#667eea',
              margin: '0 auto 50px'
            }}></div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? '1fr 2fr' : '1fr',
              gap: '50px'
            }}>
              {/* Contact Info */}
              <div>
                <div style={{ marginBottom: '25px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'rgba(102,126,234,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '20px'
                    }}>
                      <MapPin size={20} style={{ color: '#667eea' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '19px', marginBottom: '5px', color: '#2c3e50' }}>Location</h4>
                      <p style={{ fontSize: '17px', color: '#666' }}>Available for Remote Work</p>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'rgba(102,126,234,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '20px'
                    }}>
                      <Mail size={20} style={{ color: '#667eea' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '19px', marginBottom: '5px', color: '#2c3e50' }}>Email</h4>
                      <p style={{ fontSize: '17px', color: '#666' }}>ethelyn.matias@example.com</p>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'rgba(102,126,234,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '20px'
                    }}>
                      <Github size={20} style={{ color: '#667eea' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '19px', marginBottom: '5px', color: '#2c3e50' }}>GitHub</h4>
                      <a 
                        href="https://github.com/ethelynmatias" 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '17px', color: '#666', textDecoration: 'none' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; }}
                      >
                        github.com/ethelynmatias
                      </a>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'rgba(102,126,234,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '20px'
                    }}>
                      <Linkedin size={20} style={{ color: '#667eea' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '19px', marginBottom: '5px', color: '#2c3e50' }}>LinkedIn</h4>
                      <a 
                        href="https://linkedin.com/in/ethelyn-matias-62900b139" 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '17px', color: '#666', textDecoration: 'none' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#667eea'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; }}
                      >
                        linkedin.com/in/ethelyn-matias
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <form>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth > 576 ? 'repeat(2, 1fr)' : '1fr',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      style={{
                        padding: '15px',
                        border: '1px solid #dee2e6',
                        borderRadius: '5px',
                        fontSize: '17px',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      style={{
                        padding: '15px',
                        border: '1px solid #dee2e6',
                        borderRadius: '5px',
                        fontSize: '17px',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                    />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Subject"
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #dee2e6',
                      borderRadius: '5px',
                      fontSize: '17px',
                      marginBottom: '20px',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                  />
                  
                  <textarea
                    placeholder="Message"
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #dee2e6',
                      borderRadius: '5px',
                      fontSize: '17px',
                      marginBottom: '20px',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                  />
                  
                  <button
                    type="submit"
                    style={{
                      padding: '15px 40px',
                      backgroundColor: '#667eea',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '30px',
                      fontSize: '19px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#5a67d8';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#667eea';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '30px 40px',
          backgroundColor: '#2c3e50',
          color: '#fff',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0', fontSize: '17px' }}>
            © 2024 Ethelyn Matias. All rights reserved. | Designed with ❤️
          </p>
        </footer>
      </main>

      {/* Add keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progressBar {
          from {
            width: 0;
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default CVPortfolio;