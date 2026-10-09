# ⛩️ VAISHU3D — Konduru Hema Sai Vaishnavi Portfolio Sanctuary

An interactive full-page 3D portfolio and temple sanctuary built with **Three.js**, custom **GLSL Shaders**, procedural architecture, smooth spline camera tracking, and the authored **ThreeUI Kage** aesthetic.

---

## 🌟 Quick Start / How to Run

### Option 1: Direct Double-Click (Zero Setup!)
Simply double-click:
```text
C:\Users\kondu\Documents\vaishu3d.html
```
It is a 100% self-contained application with the inlined Three.js v149 WebGL engine and resilient image fallbacks. It opens instantly in Google Chrome, Microsoft Edge, Brave, or Firefox.

### Option 2: Local Web Server
You can also run a quick local server inside `C:\Users\kondu\Documents\vaishu3d`:
```bash
python -m http.server 8080 --directory C:\Users\kondu\Documents\vaishu3d
```
Then visit: `http://localhost:8080`

---

## 🔄 Recent Updates & Features
- **3 Core Living Projects**: Speculum AI Smart Mirror, Smart Fraud Detection, Agribot-X Modular Farming Robot.
- **Downloadable Resume**: The top-right navigation button downloads `assets/vaishnavi-resume.pdf`.
- **Achievements 3 in a Row**: Accolades are rendered in a spacious three-column grid on desktop, with responsive tablet and mobile layouts.
- **Working Contact Draft**: The contact form prepares an email addressed to `Konduruvaishnavi36@gmail.com` in the visitor's email app, with a Gmail compose fallback. The visitor reviews and sends the message; the static site does not send email itself.
- **Enhanced Connect UI**: Dual-card layout with live status badge, quick-copy email, instant tel call, social pills, intent selectors, and direct message transmission.

---

## 📂 Project Structure

```text
C:\Users\kondu\Documents\
├── vaishu3d.html                     # Standalone single-file interactive 3D portfolio
└── vaishu3d\                         # Complete project folder
    ├── index.html                    # Main web entry point
    ├── vaishu3d.html                 # Direct mirror entry
    ├── vaishu3d                      # Raw code file
    ├── README.md                     # Documentation & deployment guide
    ├── assets\                       # Verified binary assets & libraries
    │   ├── three.min.js              # Three.js r149 WebGL runtime
    │   ├── fonts.css                 # Onest & Japanese typography definitions
    │   ├── temple-wall.webp          # Foreground cutout layer
    │   ├── pine-tree.webp            # Foreground cutout layer
    │   ├── tall-grass.webp           # Foreground cutout layer
    │   ├── sakura-branch.webp        # Swaying sakura branch
    │   ├── maple-leaves.webp         # Swaying autumn maple leaves
    │   ├── stone-lantern.webp        # Worn stone toro lantern
    │   ├── garden-bush.webp          # Zen garden planting
    │   ├── basalt-stones.webp        # Riverbed basalt stones
    │   ├── hill.webp                 # Distant mountain horizon
    │   └── shrine-ruins.webp         # Sacred shrine ruins
    └── react-component\              # ThreeUI React / Next.js integration
        ├── VaishuLandingPage.tsx     # React component wrapper
        ├── LandingPages.tsx          # ThreeUI landing pages catalog
        ├── LandingPageFrame.tsx      # Sandboxed WebGL frame component
        ├── pageTypography.ts         # Typography & color controls
        ├── pageRecipes.ts            # Kage typography recipe
        └── threeui.css               # Shared styling
```
