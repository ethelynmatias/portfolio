import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Database, Cloud, Shield } from 'lucide-react';

const Home = () => {
  const skills = [
    { icon: Code, name: 'Full-Stack Development', description: 'React, Node.js, Python' },
    { icon: Database, name: 'Database Management', description: 'SQL, MongoDB, PostgreSQL' },
    { icon: Cloud, name: 'Cloud Solutions', description: 'AWS, Azure, Docker' },
    { icon: Shield, name: 'IT Security', description: 'Security audits, best practices' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-yellow-300">Ethelyn</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              IT Developer | Full-Stack Engineer | Problem Solver
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-50">
              Passionate about creating innovative solutions and delivering high-quality software 
              that drives business success and enhances user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <p className="text-lg text-gray-600">
              Bringing expertise across the full technology stack
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <skill.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how I can help bring your ideas to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;