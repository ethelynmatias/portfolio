import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Docker and Kubernetes',
      excerpt: 'Learn how to architect and deploy microservices using containerization technologies for better scalability and maintainability.',
      author: 'Ethelyn Matias',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'DevOps',
      image: 'https://via.placeholder.com/800x400/4F46E5/ffffff?text=Microservices',
      tags: ['Docker', 'Kubernetes', 'Microservices', 'Cloud']
    },
    {
      id: 2,
      title: 'Best Practices for React Performance Optimization',
      excerpt: 'Discover techniques to optimize your React applications for better performance and user experience.',
      author: 'Ethelyn Matias',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Frontend',
      image: 'https://via.placeholder.com/800x400/059669/ffffff?text=React+Performance',
      tags: ['React', 'JavaScript', 'Performance', 'Web Development']
    },
    {
      id: 3,
      title: 'Implementing CI/CD Pipelines with GitHub Actions',
      excerpt: 'A comprehensive guide to setting up continuous integration and deployment workflows using GitHub Actions.',
      author: 'Ethelyn Matias',
      date: '2024-03-05',
      readTime: '10 min read',
      category: 'DevOps',
      image: 'https://via.placeholder.com/800x400/DC2626/ffffff?text=CI/CD',
      tags: ['CI/CD', 'GitHub Actions', 'Automation', 'DevOps']
    },
    {
      id: 4,
      title: 'Database Optimization Techniques for Web Applications',
      excerpt: 'Explore various strategies to optimize database performance and reduce query execution time.',
      author: 'Ethelyn Matias',
      date: '2024-02-28',
      readTime: '7 min read',
      category: 'Backend',
      image: 'https://via.placeholder.com/800x400/7C3AED/ffffff?text=Database',
      tags: ['Database', 'SQL', 'Performance', 'Backend']
    },
    {
      id: 5,
      title: 'Understanding OAuth 2.0 and JWT Authentication',
      excerpt: 'Deep dive into modern authentication methods and how to implement secure user authentication.',
      author: 'Ethelyn Matias',
      date: '2024-02-20',
      readTime: '12 min read',
      category: 'Security',
      image: 'https://via.placeholder.com/800x400/EA580C/ffffff?text=Authentication',
      tags: ['Security', 'OAuth', 'JWT', 'Authentication']
    },
    {
      id: 6,
      title: 'Building Real-Time Applications with WebSockets',
      excerpt: 'Learn how to implement real-time features in your web applications using WebSocket technology.',
      author: 'Ethelyn Matias',
      date: '2024-02-15',
      readTime: '9 min read',
      category: 'Full Stack',
      image: 'https://via.placeholder.com/800x400/0891B2/ffffff?text=WebSockets',
      tags: ['WebSockets', 'Real-time', 'Node.js', 'Full Stack']
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps', 'Security'];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tech Blog</h1>
          <p className="text-xl text-blue-100">
            Insights, tutorials, and thoughts on modern software development
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <a
                      href="#"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights delivered directly to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;