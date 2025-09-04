import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: 'https://via.placeholder.com/600x400/4F46E5/ffffff?text=E-Commerce',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      teamSize: 3
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Solution',
      description: 'Comprehensive healthcare management system for clinics with patient records, appointment scheduling, and billing.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      image: 'https://via.placeholder.com/600x400/059669/ffffff?text=Healthcare',
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      teamSize: 5
    },
    {
      title: 'Real-Time Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Interactive dashboard for monitoring business metrics with real-time data updates and custom reporting.',
      technologies: ['React', 'D3.js', 'WebSocket', 'Redis'],
      image: 'https://via.placeholder.com/600x400/DC2626/ffffff?text=Analytics',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      teamSize: 2
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication, fund transfers, and account management.',
      technologies: ['React Native', 'Node.js', 'MySQL', 'JWT'],
      image: 'https://via.placeholder.com/600x400/7C3AED/ffffff?text=Banking+App',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      teamSize: 4
    },
    {
      title: 'Inventory Management System',
      category: 'Enterprise Solution',
      description: 'Cloud-based inventory system with barcode scanning, automated reordering, and multi-location support.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'AWS'],
      image: 'https://via.placeholder.com/600x400/EA580C/ffffff?text=Inventory',
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      teamSize: 3
    },
    {
      title: 'Social Learning Platform',
      category: 'EdTech',
      description: 'Educational platform with video streaming, interactive quizzes, and collaborative learning features.',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'WebRTC'],
      image: 'https://via.placeholder.com/600x400/0891B2/ffffff?text=Learning',
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
      teamSize: 6
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Projects Portfolio</h1>
          <p className="text-xl text-blue-100">
            Showcasing my recent work and technical expertise
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Team of {project.teamSize}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;