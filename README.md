# Portfolio Website - Thijn Opperman

A modern, professional, and visually striking personal portfolio showcasing front-end development skills, design expertise, and creative projects. Built with Next.js 16, TypeScript, Tailwind CSS, and enhanced with WebGL animations.

## 🚀 Key Features

- **Modern Design**: Clean, professional interface with dark aesthetic and green accent colors
- **Dark Theme**: Beautiful dark theme with consistent green accents (#4ecb71) throughout
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js 16 App Router for optimal performance
- **Type-Safe**: Full TypeScript support for better development experience
- **Interactive Galleries**: WebGL-powered circular gallery with grayscale-to-color hover effects
- **Project Showcase**: Detailed project modals with categorized images and lightbox
- **CV Download**: Professional CV with print/save as PDF functionality

## 📋 Pages & Sections

### Home Page (`/`)
1. **Hero Section**: Eye-catching hero with circular text animation and call-to-action buttons
2. **Technologies**: Infinite scrolling showcase of technologies and tools
3. **About Me**: Personal introduction with key values and interests
4. **Work Process**: Five-step iterative workflow visualization
5. **Services**: Service cards with expandable details
6. **Skills & Tools**: Toggleable display between technical and soft skills
7. **Footer**: Contact section with social media links

### About Page (`/about`)
- **Hero Section**: Personal photo with grayscale-to-color hover effect
- **Personal Story**: Detailed background and journey
- **Personality Gallery**: Interactive WebGL circular gallery with hover effects
- **Timeline**: Professional development timeline visualization

### Projects Page (`/projects`)
- **Project Grid**: Showcase of featured projects
- **Detail Modals**: Click any project to view:
  - Categorized images (wireframes, iterations, final designs)
  - Long-form project descriptions
  - External links to GitHub and Figma
  - Image lightbox for enhanced viewing

### CV Page (`/cv`)
- **Professional CV**: Clean, structured CV layout
- **Print/Save**: One-click print or save as PDF functionality
- **Contact Info**: Email, GitHub, and location details

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Runtime**: React 19.2
- **Styling**: Tailwind CSS v4
- **Utility Functions**: clsx, tailwind-merge

### UI & Animations
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **3D Effects**: OGL (WebGL library)
- **Theme Management**: next-themes

### Functionality
- **Print**: react-to-print for CV functionality
- **Image Optimization**: Next.js Image component

## 📦 Installation & Setup

```bash
# Clone the repository
git clone [repository-url]
cd Thijn-Showcase-2

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The development server will start on [http://localhost:3000](http://localhost:3000)

Open the development tools to see hot-reloading in action as you edit files.

## 📁 Project Structure

```
Thijn-Showcase-2/
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles and CSS variables
│   ├── favicon.ico              # Site favicon
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── projects/
│   │   └── page.tsx             # Projects page with modals
│   └── cv/
│       └── page.tsx             # CV page with print functionality
├── components/                   # React components
│   ├── Layout Components
│   │   ├── PillNav.tsx          # Pill-style navigation
│   │   ├── footer.tsx           # Footer with links
│   │   └── theme-provider.tsx   # Theme context provider
│   ├── Section Components
│   │   ├── hero.tsx             # Hero section
│   │   ├── about.tsx            # About me preview
│   │   ├── technologies.tsx     # Technologies showcase
│   │   ├── work-process.tsx     # Work process section
│   │   ├── work-methodology.tsx # Timeline section
│   │   ├── services.tsx         # Services section
│   │   └── skills.tsx           # Skills and tools section
│   └── Specialized Components
│       ├── CircularGallery.tsx  # WebGL circular gallery
│       ├── TiltedCard.tsx       # Tilted card component
│       ├── LogoLoop.tsx         # Infinite logo loop
│       ├── CircularText.tsx     # Circular text animation
│       └── CSS files            # Component-specific styles
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
├── public/                      # Static assets
│   ├── gallerij/                # Gallery photos
│   ├── logos/                   # Brand and technology logos
│   ├── projects/                # Project preview images
│   ├── paturain/                # Paturain project assets
│   ├── rosh/                    # Rosh project assets
│   ├── timeline/                # Timeline photos
│   └── hero.png, aboutme.png    # Hero images
├── Configuration Files
│   ├── package.json             # Dependencies and scripts
│   ├── tsconfig.json            # TypeScript configuration
│   ├── next.config.ts           # Next.js configuration
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   ├── postcss.config.mjs       # PostCSS configuration
│   ├── eslint.config.mjs        # ESLint configuration
│   └── .gitignore               # Git ignore rules
└── README.md                    # This file
```

## 🎨 Customization Guide

### Updating Content

All text content is directly in the component files:
- `app/page.tsx` - Homepage sections
- `app/about/page.tsx` - About page content
- `app/projects/page.tsx` - Project descriptions and data
- `app/cv/page.tsx` - CV content

Simply locate the component and update the text strings.

### Adding Your Own Images

1. **Profile Photos**: 
   - Hero section: Replace `public/hero.png`
   - About section: Replace `public/aboutme.png`

2. **Project Images**:
   - Add preview images to `public/projects/`
   - Add project assets to project-specific folders
   - Update image paths in project data

3. **Gallery Images**:
   - Add photos to `public/gallerij/`
   - Update the media array in `CircularGallery.tsx`

### Changing Colors

The color scheme uses a consistent green accent (`#4ecb71`):
- Primary color variables in `app/globals.css`
- Inline styles in components
- Tailwind config for utility classes

To change colors:
1. Update CSS variables in `globals.css`
2. Update inline style values in components
3. Modify Tailwind color palette if needed

### Adding New Projects

To add a new project:
1. Add project images to `public/[project-name]/`
2. Create project data object in `app/projects/page.tsx`:
   ```typescript
   {
     id: number,
     title: "Project Name",
     description: "Short description",
     longDescription: "Detailed description",
     image: "/projects/preview.png",
     categories: {
       wireframes: [...],
       iterations: [...],
       final: [...]
     },
     github: "optional-link",
     figma: "optional-link"
   }
   ```
3. Add project to the `projects` array

## 🌗 Theme Configuration

The site uses a **forced dark theme** for consistency. To change:

1. Modify `app/layout.tsx` - ThemeProvider settings
2. Update color values in `app/globals.css`
3. Adjust component styles accordingly

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build optimized production bundle
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `framer-motion` - Animations
- `lucide-react` - Icon library
- `react-icons` - Additional icons
- `next-themes` - Theme management
- `ogl` - WebGL library for 3D effects
- `react-to-print` - PDF generation
- `clsx` & `tailwind-merge` - Class utilities

### Development
- `@types/*` - TypeScript definitions
- `eslint` - Code linting
- `postcss` - CSS processing

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered pages for faster loading
- **WebGL**: Hardware-accelerated gallery animations
- **Lazy Loading**: Images loaded on demand

## 📝 License

This project is private and intended for personal use by Thijn Opperman.

## 👤 Author

**Thijn Opperman**
- Front-End Developer
- Student at Fontys ICT
- Focus: Media & Front-End Development

## 🔗 Links

- **GitHub**: [github.com/Thijn-Opperman](https://github.com/Thijn-Opperman)
- **Email**: t.opperman@student.fontys.nl

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
