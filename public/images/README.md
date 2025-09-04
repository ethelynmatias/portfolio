# Image Folders Guide

## Profile Images
Place your profile photo in `/public/images/profile/`
- Recommended: `profile.jpg` or `profile.png`
- Ideal size: 300x300px or larger (square aspect ratio)

## Portfolio Images
Place your portfolio project images in `/public/images/portfolio/`
- Recommended naming: `project1.jpg`, `project2.jpg`, etc.
- Ideal size: 800x600px or 16:9 aspect ratio
- Suggested projects to add:
  - ecommerce.jpg - E-commerce platform screenshot
  - mobile-app.jpg - Mobile application screenshot
  - dashboard.jpg - Analytics dashboard screenshot
  - crm.jpg - CRM system screenshot
  - healthcare.jpg - Healthcare app screenshot
  - ui-design.jpg - UI/UX design showcase

## How to Add Your Images
1. Copy your images to the respective folders
2. Update the image paths in `src/PortfolioApp.jsx`
3. Replace placeholder URLs with local paths like `/images/profile/profile.jpg`

## Image Optimization Tips
- Use JPEG for photos (smaller file size)
- Use PNG for screenshots with text (better quality)
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Keep file sizes under 500KB for faster loading