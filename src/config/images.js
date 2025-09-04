// Image configuration file
// Update these paths when you add your actual images to the public/images folder

export const images = {
  // Profile Image
  profile: {
    // Update with your actual profile photo
    main: '/images/profile/ethelynMatias.jpeg',
    // Fallback placeholder
    placeholder: '/images/profile/ethelynMatias.jpeg'
  },

  // Portfolio Images
  portfolio: {
    ecommerce: {
      path: '/images/portfolio/ecommerce.jpg',
      placeholder: 'https://via.placeholder.com/400x300/4F46E5/ffffff?text=E-Commerce',
      title: 'E-Commerce Platform',
      category: 'web'
    },
    mobileApp: {
      path: '/images/portfolio/mobile-app.jpg',
      placeholder: 'https://via.placeholder.com/400x300/059669/ffffff?text=Mobile+App',
      title: 'Banking Mobile App',
      category: 'mobile'
    },
    dashboard: {
      path: '/images/portfolio/dashboard.jpg',
      placeholder: 'https://via.placeholder.com/400x300/DC2626/ffffff?text=Dashboard',
      title: 'Analytics Dashboard',
      category: 'web'
    },
    uiDesign: {
      path: '/images/portfolio/ui-design.jpg',
      placeholder: 'https://via.placeholder.com/400x300/7C3AED/ffffff?text=UI+Design',
      title: 'UI/UX Design System',
      category: 'design'
    },
    crm: {
      path: '/images/portfolio/crm.jpg',
      placeholder: 'https://via.placeholder.com/400x300/EA580C/ffffff?text=CRM',
      title: 'CRM System',
      category: 'web'
    },
    healthcare: {
      path: '/images/portfolio/healthcare.jpg',
      placeholder: 'https://via.placeholder.com/400x300/0891B2/ffffff?text=Health+App',
      title: 'Healthcare App',
      category: 'mobile'
    }
  },

  // Resume/CV file
  resume: {
    path: '/documents/Ethelyn_Matias_Resume.pdf',
    filename: 'Ethelyn_Matias_Resume.pdf'
  }
};

// Helper function to check if image exists and return appropriate path
export const getImagePath = (imagePath, placeholder) => {
  // In production, you would check if the image exists
  // For now, return placeholder if path doesn't start with http
  if (imagePath && !imagePath.startsWith('http')) {
    // This will use local path when images are added
    return imagePath;
  }
  return placeholder;
};