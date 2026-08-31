# Hyper-Glass Bento Developer Portfolio

A developer portfolio website featuring a **Hyper-Glass Bento Grid aesthetic**, dynamic multi-theme engine, interactive in-browser CLI terminal, project showcase quick-view modal, live skills proficiency meters, and verified certifications directory.

---

## ✨ Key Features & Enhancements

1. **🎨 5 Dynamic Themes**:
   - **Obsidian Violet** (Default, deep neon violet / cyber glow)
   - **Cyber Emerald** (Terminal matrix green & cyan)
   - **Oceanic Blue** (Deep sapphire & azure)
   - **Sunset Amber** (Warm amber & magma red)
   - **Luminescent Light** (Crisp, clean high-contrast light theme)
2. **⚡ Interactive CLI Terminal**:
   - In-browser interactive shell where recruiters and visitors can type commands like `help`, `skills`, `projects`, `certs`, `contact`, `theme [name]`, `clear`, `date`, `whoami`, etc.
3. **🍱 Bento-Grid Layout**:
   - Asymmetric modern glassmorphic cards with subtle backdrop-filter blur, ambient radial glows, and interactive hover lighting.
4. **🚀 Dynamic Data-Driven Core (`scripts/data.js`)**:
   - 100% of your personal info, projects, skills, certificates, experience, and contact links are configured in one central file.
5. **🔍 Project Quick-View Modal**:
   - Deep-dive popups for every project showcasing engineering architecture highlights, tech tags, and live GitHub/Demo links.
6. **🌌 Interactive Particle Constellation**:
   - Canvas-based interactive particle constellation that responds smoothly to mouse interactions.
7. **📱 100% Responsive & SEO Optimized**:
   - Optimized for mobile, tablet, and widescreen desktops with OpenGraph, Twitter Cards, and Schema.org metadata.

---

## 🛠️ How to Customize for Your Friend (in 3 Simple Steps)

### Step 1: Edit `scripts/data.js`
Open [`scripts/data.js`](file:///scripts/data.js) in any text editor and update:
- **`profile`**: Replace name, title, roles, bio, location, email, and social links.
- **`skills`**: Add or remove skills and adjust proficiency percentages.
- **`projects`**: Add your friend's real projects, screenshots, GitHub links, and live URLs.
- **`certifications`**: Update cloud credentials, badge colors, and verification URLs.
- **`journey`**: Customize work history, internships, and education.

### Step 2: Replace Avatar & Resume
- Place your friend's profile picture at `images/avatar.svg` (or `.png`/`.jpg` and update the path in `data.js`).
- Place their resume PDF at `assets/resume.pdf`.

### Step 3: Deploy Free to the Web
You can host this static portfolio for free on:
- **GitHub Pages**: Push this folder to a GitHub repository, go to `Settings -> Pages`, and select `Deploy from Branch (main / root)`.
- **Vercel / Netlify**: Simply drag and drop this folder or connect the GitHub repository.

---

## 📂 File Structure

```text
friend-portfolio/
├── index.html              # Semantic HTML5 architecture & metadata
├── styles/
│   └── style.css           # Bento CSS grid, themes, & glassmorphic styling
├── scripts/
│   ├── data.js             # Central data configuration (Customize this!)
│   └── main.js             # Terminal engine, theme switcher, & modal logic
├── images/                 # SVG avatars & project preview cards
└── assets/                 # Resume PDF & icons
```
