# Cooper's Foodscaping - Project Documentation

## Overview
Cooper's Foodscaping is a modern, responsive single-page web application built using React and TypeScript. The application serves as the digital storefront for Jeremy Cooper's foodscaping business, providing potential clients with information about services, packages, galleries, and contact information.

## Technology Stack
- **Frontend Framework**: React (with React Hooks for state management)
- **Language**: TypeScript for static typing and robust development
- **Styling**: Standard CSS (Modular PageShell and component-level CSS)
- **Architecture**: Domain-Driven Structure (under the `src/foodscaping` module)

## Project Structure

The project has been organized to keep concerns separated, making it highly maintainable and scalable.

```
d:\Business_projects\Jeremy_chooper\src\
├── assets/                  # Static assets (images, icons)
├── foodscaping/             # Main application domain
│   ├── components/          # Small, reusable UI components (e.g., BrandLogoLink)
│   ├── content/             # Centralized text and data files (Single source of truth)
│   ├── hooks/               # Custom React hooks
│   ├── layout/              # Layout wrappers and structural components
│   ├── pages/               # High-level route/page components
│   ├── sections/            # Reusable page sections (Hero, Gallery, Services, etc.)
│   └── styles/              # Global styles and design tokens
├── App.tsx                  # Main App component bridging routing and layout
├── main.tsx                 # Application entry point, rendering React tree to DOM
└── index.css                # Global CSS resets and base styles
```

## Detailed Directory Breakdown

### 1. Pages (`src/foodscaping/pages/`)
These represent the main views of the application:
- `HomePage.tsx`: The landing page summarizing services, showcasing the hero section, and providing quick links.
- `AboutPage.tsx`: Detailed information about Jeremy and the philosophy behind foodscaping.
- `ServicesPage.tsx`: Breakdown of service offerings, specifically detailing maintenance packages.
- `GalleryPage.tsx`: Visual portfolio of past foodscaping projects.
- `ServiceAreaPage.tsx`: Geographical coverage area for the business.
- `ContactPage.tsx`: Form and contact details for inquiries.

### 2. Sections (`src/foodscaping/sections/`)
Modular pieces of the UI that can be composed together on pages:
- `Hero`: The top banner section for the homepage.
- `AboutJeremy`: Section featuring Jeremy's bio and portrait.
- `Services`: Visual cards representing different foodscaping packages.
- `Gallery`: Image grid component displaying projects.
- `WhyFoodscaping`: Informational section on the benefits of foodscaping.
- `Contact`: Contact form and info section.
- `ServiceArea`: Map or text listing the areas served.
- `CtaBanner`: Call-to-action banners for lead generation.
- `Navbar` & `SiteFooter`: Global navigation elements.

### 3. Content Data (`src/foodscaping/content/`)
*Recent updates consolidated these files to eliminate duplication.*
- `about.ts`: Data for the About page and section.
- `gallery.ts`: Array of images and metadata for the gallery.
- `packages.ts`: Data definitions for service packages, including images and descriptions.

## Recent Architectural Improvements
- **Content Consolidation**: Removed redundant files (`aboutSite.ts`, `gallerySite.ts`, `servicesSite.ts`, `packageImages.ts`) and merged their data into their primary domain files (`about.ts`, `gallery.ts`, `packages.ts`).
- **Clean Code & Imports**: Updated all UI components to point to the newly consolidated content files, reducing fragmentation and ensuring a single source of truth for text and images.

## Unused Code & Duplicates Cleanup
All identified duplicate content structures have been mitigated in the codebase. However, due to terminal restrictions, you will need to manually remove the residual obsolete files from your local system to ensure a fully clean directory:

- Delete `src/foodscaping/content/aboutSite.ts`
- Delete `src/foodscaping/content/gallerySite.ts`
- Delete `src/foodscaping/content/servicesSite.ts`
- Delete `src/foodscaping/content/packageImages.ts`

Following this deletion, the codebase will be completely free of duplicates.
