# REDCO Youth Ministry Website

A modern, responsive website for the Church of Pentecost Youth Ministry, built with React, TypeScript, and Vite.

## 🎯 Project Overview

This website serves as the digital home for the REDCO Youth Ministry, featuring:

- **Modern Design**: Clean, professional interface based on the provided Figma design
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Features**: Event calendar, photo gallery, blog system, and member registration
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Features

### Pages & Functionality

- **Home**: Hero section with ministry overview and quick stats
- **About Us**: Mission statement, youth statistics, and leadership team
- **Team**: Detailed leadership profiles and ministry information
- **Events**: Interactive calendar with event registration
- **Gallery**: Photo gallery with category filtering and modal view
- **Blog**: News and articles with category filtering
- **Contact**: Contact form with validation and social media links
- **Member Registration**: Comprehensive registration form for new members

### Technical Features

- **React Router**: Client-side routing for seamless navigation
- **CSS Modules**: Scoped styling for maintainable code
- **Form Validation**: React Hook Form for robust form handling
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **TypeScript**: Type-safe development
- **GitHub Pages Ready**: Configured for easy deployment

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Language**: TypeScript
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 6.20.1
- **Forms**: React Hook Form 7.48.2
- **Date Handling**: date-fns 2.30.0
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd redco-youth-ministry
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Install gh-pages package** (already included)

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Your site will be available at: `https://<username>.github.io/redco-youth-ministry/`

## 📁 Project Structure

```
redco-youth-ministry/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.css
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── Team/
│   │   │   ├── Team.tsx
│   │   │   └── Team.module.css
│   │   ├── Events/
│   │   │   ├── Events.tsx
│   │   │   └── Events.module.css
│   │   ├── Gallery/
│   │   │   ├── Gallery.tsx
│   │   │   └── Gallery.module.css
│   │   ├── Blog/
│   │   │   ├── Blog.tsx
│   │   │   └── Blog.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.module.css
│   │   └── MemberRegistration/
│   │       ├── MemberRegistration.tsx
│   │       └── MemberRegistration.module.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Colors

- **Primary Blue**: #2c5aa0
- **Secondary Blue**: #1e3f73
- **Success Green**: #28a745
- **Warning Yellow**: #ffc107
- **Danger Red**: #dc3545
- **Text Dark**: #333
- **Text Light**: #666

### Typography

- **Font Family**: Inter, system fonts
- **Headings**: 600 weight
- **Body**: 400 weight
- **Responsive**: Scales with viewport

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `src/pages/`
2. Add the component and CSS module files
3. Update `App.tsx` with the new route
4. Add navigation link in `Header.tsx`

### Styling

- Use CSS Modules for component-specific styles
- Global styles in `App.css` and `index.css`
- Follow the established design system

### Content Updates

- Update placeholder images with actual photos
- Replace placeholder text with real content
- Update contact information and social media links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the Church of Pentecost Youth Ministry.

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for the REDCO Youth Ministry**
