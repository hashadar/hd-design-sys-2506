# Changelog

All notable changes to the hasha dar design system will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-02

### 🎨 Major Design System Launch

#### Added
- **Design Token System**
  - Comprehensive colour scales (cream, green, orange) with 50-900 variants
  - Systematic spacing scale (tight to generous) based on mathematical progression
  - Typography tokens with Cormorant serif and JetBrains Mono pairing
  - Layout tokens for consistent dimensions and spacing

- **Angular Design Language**
  - Sharp aesthetic with minimal border radius
  - Custom CSS clip-paths for angular corner cuts
  - Pincushioning effects on interactive elements
  - Enhanced shadow system with defined depth

- **Component Library**
  - Accessible buttons with three variants (primary, secondary, accent)
  - Interactive cards with hover animations and angular styling
  - Navigation system with active states and hover effects
  - Form elements with consistent styling
  - Code blocks with angular presentation

- **Interactive Effects**
  - Hover animations preserved throughout the system
  - Pincushioning button effects with scale transformations
  - Angular colour swatches with rotation on hover
  - Smooth transitions using cubic-bezier timing functions

- **Documentation System**
  - Comprehensive typography guidelines and examples
  - Colour palette documentation with accessibility information
  - Spacing system with usage guidelines
  - Component library with implementation examples
  - Design tokens documentation with code examples

#### Technical Implementation
- **Framework**: SvelteKit 2.x with TypeScript
- **Styling**: Custom CSS with design tokens and Tailwind CSS 4.0
- **Components**: Bits UI 2.4.1 for accessibility
- **Typography**: Google Fonts integration (Cormorant, JetBrains Mono)
- **Build System**: Vite with ESLint and Prettier

#### Design Principles
- **Simplicity**: Clean, minimal design with purposeful use of space
- **Consistency**: Systematic approach to design tokens and spacing
- **Accessibility**: WCAG 2.1 AA compliant throughout with proper contrast ratios
- **Angular Aesthetics**: Sharp edges and industrial design language

#### Localisation
- **British English**: Converted all content to British English spelling
- **Technical Standards**: Maintained American spelling for CSS properties and technical terms

#### Performance Optimisations
- **Removed Page Load Animations**: Instant loading with no entrance animations
- **Preserved Interactions**: Maintained all hover and user interaction animations
- **Optimised Shadows**: Enhanced shadow system for better visual hierarchy

### 🔧 Technical Improvements

#### Navigation
- **Wider Sidebar**: Increased from 16rem to 20rem for better content spacing
- **Angular Styling**: Added subtle corner radius and enhanced visual hierarchy
- **Active States**: Clear indication of current page with angular accents

#### Code Examples
- **Fixed Formatting**: Resolved template literal parsing issues across all pages
- **Consistent Presentation**: Angular styling applied to all code blocks
- **Improved Readability**: Enhanced syntax presentation with proper spacing

#### Responsive Design
- **Mobile-First**: Consistent breakpoints and responsive behaviour
- **Accessibility**: Keyboard navigation and screen reader support
- **Touch-Friendly**: Appropriate touch targets for mobile devices

### 🎯 Design Token Specifications

#### Colours
```css
/* Cream Palette - Warm neutrals */
--color-cream-50: #FEFCF9;
--color-cream-100: #FDFBF7;
--color-cream-500: #F2E8D8;
--color-cream-900: #8F7A52;

/* Green Palette - Primary brand */
--color-green-50: #F0F4F2;
--color-green-500: #4A7C59;
--color-green-800: #1B4332;
--color-green-900: #0F2D1F;

/* Orange Palette - Accent colour */
--color-orange-50: #FEF7F0;
--color-orange-500: #D18442;
--color-orange-700: #B45309;
--color-orange-900: #5F2D05;
```

#### Spacing
```css
/* Mathematical progression for consistent rhythm */
--space-tight: 0.25rem;      /* 4px */
--space-compact: 0.5rem;     /* 8px */
--space-normal: 0.75rem;     /* 12px */
--space-comfortable: 1rem;   /* 16px */
--space-loose: 1.5rem;       /* 24px */
--space-spacious: 2rem;      /* 32px */
--space-generous: 3rem;      /* 48px */
```

#### Angular Design Elements
```css
/* Corner cuts for angular aesthetic */
--clip-corner: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 12px 100%, 0 calc(100% - 8px));
--clip-corner-lg: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));

/* Pincushioning effects */
--shadow-pincushion: inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -1px 2px rgba(255, 255, 255, 0.3);
--shadow-pincushion-hover: inset 0 3px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 3px rgba(255, 255, 255, 0.4);
```

### 📖 Documentation

#### Pages Added
- **Overview**: Introduction and design foundations
- **Typography**: Font system and hierarchy guidelines
- **Colours**: Comprehensive palette documentation
- **Spacing**: Systematic spacing and layout guidelines
- **Components**: Interactive component library
- **Design Tokens**: Complete token reference

#### Code Examples
- All pages include practical CSS implementation examples
- Bits UI integration patterns documented
- Responsive design patterns included

### 🌍 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 📄 Licence
MIT Licence - See [LICENSE](LICENSE) file for details

---

**Full Changelog**: Initial release v1.0.0 