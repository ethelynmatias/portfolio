# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, typewriter effects, and a clean professional design.

## 🚀 Live Demo
[View Portfolio](https://github.com/ethelynmatias/portfolio)

## ✨ Features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Typewriter effect for intro text and scroll animations
- **Modern UI**: Clean, professional design with gradient effects
- **Skills Section**: Visual progress bars for technical skills
- **Services Showcase**: Detailed service offerings with icons
- **Education & Experience Timeline**: Professional background display
- **Contact Section**: Social media links (GitHub, LinkedIn)
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Custom CSS animations
- **JavaScript**: ES6+

## 📋 Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/ethelynmatias/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```
Or if you prefer yarn:
```bash
yarn install
```

### 3. Run Development Server
```bash
npm run dev
```
Or with yarn:
```bash
yarn dev
```

The site will be available at `http://localhost:5173`

## 📦 Building for Production

### 1. Create Production Build
```bash
npm run build
```
Or with yarn:
```bash
yarn build
```

This will create a `dist` folder with optimized production files.

### 2. Preview Production Build
```bash
npm run preview
```
Or with yarn:
```bash
yarn preview
```

### 3. Serve Production Build
You can serve the production build using:
```bash
npx serve dist -p 3000
```

The production site will be available at `http://localhost:3000`

## 🚀 Deployment

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify
1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to Vercel
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## 📁 Project Structure
```
portfolio/
├── public/              # Static assets
│   └── images/         # Image files
├── src/                # Source files
│   ├── components/     # React components
│   ├── CVPortfolio.jsx # Main portfolio component
│   ├── index.css       # Global styles and animations
│   └── main.jsx        # Application entry point
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## 🎨 Customization

### Update Personal Information
Edit `src/CVPortfolio.jsx` to update:
- Name and title
- About section content
- Skills and percentages
- Education and experience
- Contact information
- Social media links

### Change Colors/Theme
Modify the color scheme in:
- `src/CVPortfolio.jsx` (inline styles)
- `src/index.css` (global styles)
- `tailwind.config.js` (Tailwind configuration)

### Add Portfolio Items
In `src/CVPortfolio.jsx`, update the `portfolioItems` array:
```javascript
const portfolioItems = [
  {
    id: 1,
    title: "Project Name",
    category: "web",
    image: "/images/project.jpg",
    description: "Project description"
  },
  // Add more items...
];
```

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, you can specify a different port:
```bash
npm run dev -- --port 3000
```

### Dependencies Issues
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Check Node.js version:
```bash
node --version
```
Ensure it's version 14 or higher.

## 📝 License
This project is open source and available under the MIT License.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 👤 Contact
- **GitHub**: [@ethelynmatias](https://github.com/ethelynmatias)
- **Portfolio**: [https://github.com/ethelynmatias/portfolio](https://github.com/ethelynmatias/portfolio)

---
Made with ❤️ using React + Vite