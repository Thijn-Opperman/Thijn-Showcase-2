# Portfolio Website - Thijn Opperman

A modern, professional, and user-friendly personal portfolio landing page built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Dark Mode**: Light and dark theme support with smooth transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Animations**: Subtle Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js 14+ for optimal performance
- **Type-Safe**: Full TypeScript support

## 📋 Sections

1. **Navigation Bar**: Sticky navbar with light/dark mode toggle and mobile menu
2. **Hero Section**: Eye-catching hero with profile picture, name, and call-to-action buttons
3. **Technologies**: Showcase of technologies and tools used
4. **About Me**: Personal introduction section with key values
5. **Work Methodology**: Five-step workflow visualization
6. **Services**: Three service cards with detailed descriptions
7. **Skills & Tools**: Comprehensive skills and tools display
8. **Footer**: Contact section with social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode support

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Live Development

The development server will start on [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
showcase-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Main page with all sections
│   ├── globals.css          # Global styles and theme variables
│   └── favicon.ico
├── components/
│   ├── navbar.tsx           # Navigation component
│   ├── hero.tsx             # Hero section
│   ├── technologies.tsx     # Technologies showcase
│   ├── about.tsx            # About me section
│   ├── work-methodology.tsx  # Work process section
│   ├── services.tsx          # Services section
│   ├── skills.tsx           # Skills and tools section
│   ├── footer.tsx            # Footer component
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── public/                  # Static assets
```

## 🎨 Customization

### Adding Your Own Images

Replace the placeholder images in:
- `components/hero.tsx` - Profile photo
- `components/about.tsx` - About me photo

Simply replace the placeholder divs with Next.js Image components pointing to your images in the `public` folder.

### Updating Content

All text content is directly in the component files. Update the strings in each component to customize the content.

### Changing Colors

The color scheme is defined in `app/globals.css` using CSS variables. Modify the HSL values to change the primary colors and theme.

## 🌗 Theme

The site supports both light and dark modes. The theme toggle is in the navigation bar. The default theme follows the system preference.

## 📝 License

This project is private and intended for personal use.

## 👤 Author

Thijn Opperman - Front-End Developer

---

Built with ❤️ using Next.js and Tailwind CSS
