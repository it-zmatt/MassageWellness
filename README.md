# NeuroGym - Massage Therapy & Personal Training

A modern, responsive website for professional massage therapy and personal training services in Ottawa. Built with React and featuring smooth animations, this website showcases therapeutic services with an elegant and user-friendly interface.

## 🌟 Live Demo

[View Live Website](https://your-domain.com) *(Replace with your actual deployment URL)*

## 📸 Preview

![NeuroGym Homepage](./preview/homepage.png)
*Modern hero section with smooth animations*

![Services Section](./preview/services.png)
*Comprehensive service offerings with pricing*

## ✨ Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Modern UI Components** - Clean, accessible interface with Radix UI primitives
- **Professional Branding** - Cohesive design reflecting healthcare professionalism
- **Service Showcase** - Detailed massage therapy and personal training offerings
- **Testimonials Section** - Client reviews and success stories
- **Contact Integration** - Easy booking and contact information
- **Performance Optimized** - Fast loading times and smooth interactions
- **SEO Friendly** - Optimized meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Framer Motion** - Advanced animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives

### Development Tools
- **PostCSS** - CSS processing with autoprefixer
- **ESLint** - Code linting and formatting
- **Modern JavaScript (ES6+)** - Latest JavaScript features

### Styling & Design
- **Custom CSS Variables** - Consistent theming system
- **Font Awesome** - Professional iconography
- **Google Fonts (Inter)** - Modern typography
- **Responsive Grid System** - Mobile-first design approach

## 🚀 Installation Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Clone the Repository
```bash
git clone https://github.com/yourusername/neurogym-website.git
cd neurogym-website
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build & Preview Instructions

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

The production build will be generated in the `dist` directory.

## 📁 Folder Structure

```
neurogym-website/
├── client/
│   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/           # Reusable UI components
│   │   │   │   ├── Navbar.jsx    # Navigation component
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── ServicesSection.jsx
│   │   │   │   ├── BioSection.jsx
│   │   │   │   ├── TestimonialsSection.jsx
│   │   │   │   ├── BookingSection.jsx
│   │   │   │   └── Footer.jsx
│   │   │   │
│   │   │   │   ├── hooks/
│   │   │   │   │   └── use-mobile.jsx # Mobile detection hook
│   │   │   │   └── lib/
│   │   │   │       └── utils.js      # Utility functions
│   │   │   │
│   │   │   │   ├── App.jsx           # Main application component
│   │   │   │   ├── main.jsx          # Application entry point
│   │   │   │   └── index.css         # Global styles and Tailwind imports
│   │   │   │
│   │   │   └── index.html            # HTML template
│   │   │
│   │   └── package.json              # Dependencies and scripts
│   │
│   └── vite.config.js           # Vite configuration
│
└── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
└── README.md                # Project documentation
```

## 🚀 Deployment Instructions

### Netlify Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Framework Preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### Manual Deployment
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve the `index.html` file for all routes

## 🎨 Customization

### Updating Content
- **Services**: Edit `client/src/components/ServicesSection.jsx`
- **About Information**: Modify `client/src/components/BioSection.jsx`
- **Contact Details**: Update `client/src/components/Footer.jsx`
- **Testimonials**: Edit `client/src/components/TestimonialsSection.jsx`

### Styling
- **Colors**: Modify CSS variables in `client/src/index.css`
- **Typography**: Update font imports in `client/index.html`
- **Layout**: Adjust Tailwind classes in component files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Features

- **Code Splitting** - Automatic code splitting with Vite
- **Asset Optimization** - Optimized images and fonts
- **Lazy Loading** - Components load as needed
- **Minimal Bundle Size** - Only essential dependencies included
- **Fast Refresh** - Instant updates during development

## 📄 License

**All Rights Reserved**

Copyright © 2024 LOLO. All rights reserved.

This project and its contents are proprietary and confidential. No part of this software may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder.

## 👨‍💻 Author

**LOLO**
- Website: [Your Website](https://your-website.com)
- Email: [your-email@example.com](mailto:your-email@example.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

## 🤝 Contributing

This is a proprietary project. For any suggestions or improvements, please contact the author directly.

## 🙏 Acknowledgments

- **Framer Motion** - For providing excellent animation capabilities
- **Radix UI** - For accessible UI primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite** - For the fast and modern build tool
- **Font Awesome** - For professional iconography
- **Unsplash** - For high-quality stock photography

## 📞 Support

For technical support or questions about this project, please contact:
- Email: [support@your-domain.com](mailto:support@your-domain.com)
- Phone: +1 (XXX) XXX-XXXX

---

**Built with ❤️ by LOLO** | **© 2024 All Rights Reserved** 