# hasha dar design system

A modern, accessible design system built with SvelteKit, featuring angular aesthetics and comprehensive design tokens.

## 🎨 Design Philosophy

this design system embraces simplicity, accessibility, and systematic thinking. key principles include:

- **angular aesthetics**: sharp, clean lines with minimal border radius
- **accessibility first**: WCAG 2.1 AA compliant throughout
- **systematic approach**: comprehensive design tokens and consistent spacing
- **single source of truth**: parameterised data management

## ⚡ Features

- **comprehensive design tokens**: colours, spacing, typography, and layout variables
- **angular design language**: sharp aesthetics with pincushioning effects
- **accessible components**: built with bits ui for maximum accessibility
- **responsive design**: mobile-first approach with consistent breakpoints
- **british english**: proper localisation throughout the documentation

## 📚 Documentation

the design system includes comprehensive documentation:

- **overview**: introduction and design foundations
- **typography**: font system and hierarchy guidelines
- **colours**: comprehensive palette documentation
- **spacing**: systematic spacing and layout guidelines
- **components**: interactive component library
- **design tokens**: complete token reference
- **changelog**: version history and updates

## 🔄 Changelog Management

this project follows a **single source of truth** approach for changelog management:

### files involved:
- `CHANGELOG.md` - markdown source file (primary source)
- `src/lib/changelog.ts` - typescript data file (synchronized copy)
- `src/routes/changelog/+page.svelte` - rendered changelog page

### workflow:
1. update `CHANGELOG.md` with new changes
2. synchronize data in `src/lib/changelog.ts`
3. commit both files to maintain consistency

this approach ensures parameterisation whilst avoiding runtime file system dependencies.

## 🛠 Installation

```bash
# clone the repository
git clone https://github.com/hashadar/hd-design-sys-2506.git

# navigate to directory
cd hd-design-sys-2506

# install dependencies
npm install

# start development server
npm run dev
```

## 🧪 Development

```bash
# development server
npm run dev

# build for production
npm run build

# preview production build
npm run preview

# type checking
npm run check

# lint code
npm run lint

# format code
npm run format

# run tests
npm run test
```

## 🌍 Browser Support

- chrome 90+
- firefox 88+
- safari 14+
- edge 90+

## 🛠 Technology Stack

- **framework**: SvelteKit 2.x with TypeScript
- **styling**: Custom CSS with design tokens and Tailwind CSS 4.0
- **components**: Bits UI 2.4.1 for accessibility
- **typography**: Google Fonts (Cormorant, JetBrains Mono)
- **build tools**: Vite, ESLint, Prettier, Playwright

## 📄 licence

MIT licence - see [LICENSE](LICENSE) file for details.
