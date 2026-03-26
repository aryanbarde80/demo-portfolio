# aryanOS 2.0 — AI-OS Portfolio

> **"Discipline and Consistency is all what is needed!"**

A cinematic, terminal-themed developer portfolio built as a fully immersive digital operating system. Features a boot sequence, sticky navigation, 3D avatar, GSAP scroll animations, and a recruiter-friendly layout.

**Live:** [demo-portfolio-psi-two.vercel.app](https://demo-portfolio-psi-two.vercel.app)

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16.2 (Turbopack, App Router) |
| **3D Graphics** | Three.js, @react-three/fiber, @react-three/drei |
| **Animations** | GSAP (ScrollTrigger, Timeline), Framer Motion |
| **Styling** | Tailwind CSS 4.0 |
| **Audio** | Howler.js |
| **State** | Zustand |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 20.x+
- npm 10.x+

### Setup

```bash
git clone https://github.com/aryanbarde80/aryanOS-2.0.git
cd aryanOS-2.0
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
aryanOS-2.0/
├── public/
│   ├── aryan-avatar-3d.png       # 3D avatar image
│   ├── aryan-avatar.png          # Fallback avatar
│   ├── favicon.png               # Site favicon
│   └── Aryan_Barde_Resume.pdf    # Downloadable resume
├── src/
│   ├── app/
│   │   ├── layout.js             # Root layout with metadata & fonts
│   │   ├── page.js               # Main page — assembles all components
│   │   └── globals.css           # Global styles & Tailwind imports
│   └── components/
│       ├── BootSequence.js        # Terminal-style boot animation
│       ├── TerminalHero.js        # Hero section with typing effect & CTAs
│       ├── CinematicQuote.js      # Khabib-style word-by-word text reveal
│       ├── StickyNav.js           # Sticky navigation with scroll anchors
│       ├── SystemHUD.js           # Top HUD — real time & session uptime
│       ├── StatsCounter.js        # Animated stat counters
│       ├── AnalyticsDashboard.js  # Tag-based skills display by domain
│       ├── SystemMonitorNode.js   # Career timeline with milestones
│       ├── GitHubStatsNode.js     # GitHub profile & repos (with API fallback)
│       ├── ProjectsShowcase.js    # Filterable project cards grid
│       ├── ExperienceList.js      # Work experience timeline
│       ├── PerformanceBenchmarks.js # Real project achievement metrics
│       ├── ImpactMetrics.js       # Key impact numbers from work experience
│       ├── AchievementsNode.js    # Awards & competition results
│       ├── CertificationsNode.js  # Certifications list
│       ├── OpenSourceNode.js      # Open source contributions (Hacktoberfest)
│       ├── ContactNode.js         # Contact links grid
│       ├── RecruiterHUD.js        # Floating recruiter quick-panel
│       ├── OSWindow.js            # Reusable OS-style window wrapper
│       ├── DivineCanvas.js        # Three.js 3D scene with avatar
│       ├── DivineAudio.js         # Ambient audio system (Howler.js)
│       ├── MagneticCursor.js      # Custom cursor with magnetic effect
│       ├── NeuralMatrix.js        # Animated background canvas
│       ├── KnowledgeGraph.js      # Skills knowledge graph visualization
│       ├── DiagnosticLog.js       # Simulated system log display
│       └── SystemArchitectureNode.js # Tech stack architecture diagram
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## Key Features

### Navigation & UX
- **Boot Sequence** — Cinematic terminal boot animation on first load
- **Sticky Nav** — Always-accessible navigation with active section tracking and back-to-top button
- **Resume Download** — One-click PDF download from hero and nav bar
- **Recruiter Panel** — Floating quick-access panel with highlights and social links

### Visual Effects
- **3D Avatar** — Interactive Three.js avatar with idle animations and cursor tracking
- **Cinematic Quote** — GSAP-powered word-by-word text reveal with blur and 3D rotation
- **Neural Matrix** — Animated canvas background reactive to cursor movement
- **Magnetic Cursor** — Custom cursor with magnetic attraction to interactive elements

### Content Sections
- **Skills Dashboard** — Tag-based skill display organized by domain (no self-rated percentages)
- **Career Timeline** — Animated milestones with work experience highlights
- **GitHub Stats** — Live GitHub profile data with graceful API fallback
- **Projects Grid** — Filterable project cards with direct repo links
- **Impact Metrics** — Verified achievement numbers from work experience
- **Performance Benchmarks** — Project-specific metrics tied to actual results

### Design System
- **Color Palette:** Cyan `#00f0ff` | Red `#ff003c` | Orange `#ffaa44` | Dark `#030712`
- **Typography:** Geist (UI), Inter (body), monospace (terminal)
- **OS Window Component:** Reusable glassmorphic panel with collapsible header

---

## Deployment

Deployed on **Vercel** with automatic preview deployments on PR branches.

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

**Aryan Barde** | [GitHub](https://github.com/aryanbarde80) | [LinkedIn](https://linkedin.com/in/aryanbarde80) | [Email](mailto:aryanbarde80@gmail.com)
