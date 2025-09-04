import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  LineChart,
  Settings,
  Users,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue.js, and Angular.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android using React Native.',
      features: ['Native Performance', 'Offline Capability', 'Push Notifications', 'App Store Deployment']
    },
    {
      icon: Database,
      title: 'Database Design & Management',
      description: 'Efficient database solutions with SQL and NoSQL technologies.',
      features: ['Schema Design', 'Query Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and management on AWS, Azure, and Google Cloud.',
      features: ['Server Configuration', 'Auto-scaling', 'CI/CD Pipelines', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'IT Security Consulting',
      description: 'Security audits and implementation of best practices to protect your assets.',
      features: ['Security Audits', 'Vulnerability Assessment', 'Data Encryption', 'Compliance']
    },
    {
      icon: LineChart,
      title: 'System Analysis',
      description: 'Comprehensive analysis of existing systems and recommendation of improvements.',
      features: ['Process Mapping', 'Requirements Analysis', 'Solution Design', 'Documentation']
    },
    {
      icon: Settings,
      title: 'API Development',
      description: 'RESTful and GraphQL API development with proper documentation.',
      features: ['REST APIs', 'GraphQL', 'Authentication', 'API Documentation']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align IT with business objectives.',
      features: ['Tech Stack Selection', 'Architecture Review', 'Team Training', 'Best Practices']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize application and system performance for better user experience.',
      features: ['Code Optimization', 'Load Testing', 'Caching Strategies', 'Resource Management']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Work Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your requirements and objectives' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed roadmap and timeline' },
              { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{phase.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;