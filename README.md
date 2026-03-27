# 🌌 ARYAN BARDE // AI-OS PORTFOLIO 

> **"Discipline and Consistency is all what is needed!"**

A high-performance, aesthetically premium portfolio built with a futuristic **"Agentic OS"** philosophy — a fully immersive digital experience that blurs the line between portfolio and operating system. This project leverages cutting-edge web technologies to deliver a cinematic 3D environment synchronized with a terminal-driven interface, creating a narrative-driven user journey that reflects the mindset of a disciplined developer and architect.

![Portfolio Preview](/public/aryan-avatar-3d.png)

---

## 📖 TABLE OF CONTENTS

- [Overview](#-overview)
- [Core Systems](#-core-systems)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Performance Optimization](#-performance-optimization)
- [Philosophy & Design Language](#-philosophy--design-language)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🔭 OVERVIEW

The **AI-OS Portfolio** is a conceptual artifact — a self-contained digital ecosystem that mimics the behavior of an intelligent operating system. Visitors are greeted with a boot sequence, a responsive terminal, draggable system panels, real-time diagnostics, and a deeply integrated 3D avatar that reacts to user engagement.

Built with a **modular component architecture**, this project demonstrates:
- Advanced **3D rendering pipelines** using Three.js
- **Real-time state synchronization** across UI, audio, and animation layers
- **Terminal emulation** with command parsing and dynamic output
- **Performance-first design** with lazy loading, GPU optimization, and asset streaming

---

## ⚙️ CORE SYSTEMS

### 🌌 Celestial 3D Engine
- Powered by `React-Three-Fiber` and `Three.js` with a custom **"Divine Canvas"** shader system.
- Features a dynamic **star-field simulation** with parallax depth mapping.
- **Khabib-inspired animated avatar** with idle animation states, mouth sync for terminal echo, and ambient eye tracking (cursor-reactive).
- Utilizes **skeletal animation** with `useFrame` hooks for per-frame updates and physics-inspired motion.

### 💻 Agentic Terminal
- A real-time, **state-driven terminal interface** that simulates system boot sequences, diagnostic operations, and portfolio navigation.
- Supports **custom commands** (`help`, `about`, `skills`, `clear`, `sudo`) with extensible command registry.
- Features **typewriter effects**, **blinking cursor**, **command history** (up/down arrow), and **audio feedback** on input.

### 🪟 Glassmorphic OS Shell
- A custom-built **windowing system** with draggable, resizable panels inspired by modern OS design.
- Each window is an independent **React component** with its own lifecycle and state management.
- Real-time **diagnostic stats panel** simulating CPU/Memory/Network usage with dynamic polling.
- Premium typography using **Geist** and **Inter** with fluid typography scaling.

### 🧠 Neural Matrix Overlay
- Interactive **canvas-based background effect** that reacts to cursor movement and system states.
- Uses **WebGL** with custom fragment shaders for real-time noise generation and color modulation.
- Adapts color schemes based on **time of day** and user interaction intensity.

### 🎧 Divine Audio
- Ambient **cosmic soundscapes** with seamless loop transitions using `Howler.js`.
- Interactive **hover sounds** inspired by the damru (Indian ritual instrument), mapped to UI elements.
- Audio context is **lazy-initialized** on first user interaction for browser compliance.
- Features a dedicated **sound mixer panel** for volume control and track selection.

---

## 🛠 TECH STACK

| Category             | Technologies                                                                 |
|----------------------|------------------------------------------------------------------------------|
| **Framework**        | Next.js 16.2 (Turbopack) — App Router, Server Components, Edge-ready         |
| **3D Graphics**      | Three.js, @react-three/fiber, @react-three/drei, @react-three/postprocessing |
| **Animations**       | GSAP (ScrollTrigger, Timeline), Framer Motion, CSS Keyframes                 |
| **Styling**          | Tailwind CSS 4.0, Vanilla CSS Modules, CSS Variables for theming              |
| **Audio**            | Howler.js, Web Audio API                                                      |
| **State Management** | Zustand (global UI state), React Context (theme, terminal), useReducer        |
| **Icons**            | Lucide React, Custom SVG assets                                               |
| **Typography**       | @next/font (Geist, Inter), System Font Stack fallback                         |
| **Deployment**       | Vercel (Edge Functions, ISR, Analytics)                                       |

---

## 🏛 ARCHITECTURE

The project follows a **modular monolith** structure with clear separation of concerns:

```
src/
├── app/                 # Next.js App Router pages and layouts
├── components/          # Reusable UI components
│   ├── terminal/        # Terminal emulator core and commands
│   ├── windows/         # OS window components
│   ├── 3d/              # Three.js scenes, models, and hooks
│   └── audio/           # Audio context providers and controls
├── hooks/               # Custom React hooks (useAudio, useTerminal, useSystemStats)
├── lib/                 # Utility functions, constants, and command registry
├── stores/              # Zustand stores (uiStore, terminalStore, audioStore)
├── styles/              # Global CSS, Tailwind imports, theme variables
└── types/               # TypeScript type definitions and interfaces
```

### Key Architectural Decisions:
- **Server Components** used for static content and metadata, **Client Components** for interactive features
- **Zustand** for global state to avoid prop drilling while maintaining performance
- **Lazy loading** for 3D assets and audio files via dynamic imports
- **WebGL context loss handling** for resilience during GPU stress
- **Custom event bus** for cross-component communication without tight coupling

---

## 🚀 GETTING STARTED

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher
- A modern browser with WebGL support

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aryanbarde80/demo-portfolio.git
   cd demo-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configurations
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

---

## 📁 PROJECT STRUCTURE (DETAILED)

```
demo-portfolio/
├── public/
│   ├── models/          # GLTF/GLB 3D models
│   ├── audio/           # Ambient tracks and SFX
│   ├── fonts/           # Custom font files
│   └── images/          # Static assets and fallbacks
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with providers
│   │   ├── page.tsx     # Main OS interface
│   │   └── globals.css  # Global styles and Tailwind
│   ├── components/
│   │   ├── terminal/
│   │   │   ├── Terminal.tsx
│   │   │   ├── TerminalInput.tsx
│   │   │   ├── TerminalOutput.tsx
│   │   │   └── commands/
│   │   │       ├── registry.ts
│   │   │       └── handlers/
│   │   ├── windows/
│   │   │   ├── Window.tsx
│   │   │   ├── DiagnosticWindow.tsx
│   │   │   ├── AboutWindow.tsx
│   │   │   └── SkillsWindow.tsx
│   │   ├── 3d/
│   │   │   ├── Scene.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── StarField.tsx
│   │   │   └── hooks/
│   │   │       └── useModelLoader.ts
│   │   ├── audio/
│   │   │   ├── AudioProvider.tsx
│   │   │   ├── SoundMixer.tsx
│   │   │   └── useAudio.ts
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── GlassPanel.tsx
│   │       └── TypingEffect.tsx
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── systemStats.ts
│   ├── stores/
│   │   ├── uiStore.ts
│   │   ├── terminalStore.ts
│   │   └── audioStore.ts
│   ├── hooks/
│   │   ├── useSystemStats.ts
│   │   ├── useDraggable.ts
│   │   └── useKeyboardShortcuts.ts
│   └── types/
│       └── index.ts
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ⚡ PERFORMANCE OPTIMIZATION

| Strategy                  | Implementation                                                                 |
|---------------------------|--------------------------------------------------------------------------------|
| **Code Splitting**        | Dynamic imports for 3D components, audio modules, and heavy UI elements        |
| **Asset Compression**     | GLTF models compressed with Draco, audio in MP3/OGG dual format, WebP images   |
| **GPU Optimization**      | Reduced draw calls via instanced meshes, level-of-detail (LOD) for avatar      |
| **Memory Management**     | Dispose of Three.js geometries/materials on unmount, audio context cleanup     |
| **Bundle Analysis**       | `@next/bundle-analyzer` for monitoring and optimizing chunk sizes              |
| **Image Optimization**    | Next.js `next/image` with lazy loading and responsive srcset                   |
| **Font Optimization**     | `@next/font` with subsetting and display swap                                  |
| **Edge Caching**          | ISR for static pages, Vercel Edge Network for global distribution              |

---

## 🧘 PHILOSOPHY & DESIGN LANGUAGE

This portfolio is not just a showcase of code; it is a manifestation of **Technical Writing** and **Architectural Logic**. Every component is treated as a **"Node"** in a larger system, reflecting the interconnectivity of modern full-stack development and AI systems.

### Design Principles:
- **Narrative-driven UX**: Every interaction tells a story — from boot sequence to terminal exploration.
- **Diegetic interface**: UI elements exist within the "OS" metaphor; nothing feels bolted on.
- **Progressive enhancement**: Core content works without JavaScript; 3D and audio enhance, not replace.
- **Accessibility**: Keyboard navigable terminal, ARIA labels, focus trapping in modals, reduced motion support.

### Visual Identity:
- **Color Palette**: Deep cosmic blues, neon cyans, and subtle gold accents inspired by Vedic cosmology.
- **Typography**: Geist for UI, Inter for body, monospace for terminal — all with fluid scaling.
- **Motion**: GSAP-powered easing curves that mimic natural physical systems (overshoot, bounce, inertia).

---

## 🌐 DEPLOYMENT

The project is optimized for deployment on **Vercel** with the following configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1", "hnd1", "sfo1"]
}
```

### Environment Variables:
| Variable          | Description                          |
|-------------------|--------------------------------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for metadata         |
| `ANALYTICS_ID`    | Vercel Analytics or custom provider  |
| `AUDIO_ENABLED`   | Toggle audio features (default: true)|

---

## 📄 LICENSE

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 ACKNOWLEDGMENTS

- **Three.js** community for extensive examples and shader resources
- **Vercel** for seamless deployment and edge infrastructure
- **Khabib Nurmagomedov** for the unwavering discipline that inspired this project's philosophy

---

**© 2026 ARYAN BARDE**. Registered Agent of the Cosmic Network.  
*"The code is the mantra; the execution is the meditation."*

---

