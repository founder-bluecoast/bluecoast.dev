# Blue Coast Software

> Coastal discipline meets terminal aesthetics

A production-ready website for Blue Coast Software, a California-based software workshop specializing in terminal UIs, web applications, and custom business tools.

## Design System: "Midnight Tide"

This site implements a comprehensive terminal-aesthetic design system with:

- **Terminal/Command-line inspired UI** - Monospace typography, box-drawing characters
- **Muted professional palette** - Dark backgrounds with coastal-inspired accents
- **Grid-based layouts** - Visible subtle grid overlay for structure
- **Retro-modern fusion** - Classic computing meets contemporary design

### Color Palette

```css
--midnight: #0d1117      /* Main background */
--dark-slate: #161b22    /* Secondary backgrounds */
--tide-blue: #5a8fa8     /* Primary accent */
--coral: #c97d6b         /* Secondary accent */
--purple: #8b7894        /* Tertiary accent */
--sage: #7fa883          /* Terminal green */
--soft-white: #d0d0d0    /* Body text */
```

## Features

✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
✅ **Semantic HTML5** - Proper structure and accessibility
✅ **CSS Grid & Flexbox** - Modern layout techniques
✅ **Custom Properties** - Easy theme customization
✅ **Smooth Animations** - Terminal cursor blink, card hovers, transitions
✅ **No Dependencies** - Pure HTML/CSS/JS (except IBM Plex Mono font)
✅ **Fast Loading** - Optimized for performance
✅ **Accessible** - WCAG AA compliant, keyboard navigation
✅ **Print Styles** - Clean print layout

## File Structure

```
/
├── index.html                 # Main HTML file
├── css/
│   ├── reset.css             # CSS reset for consistent baseline
│   ├── variables.css         # Design system custom properties
│   ├── layout.css            # Grid overlay, containers, layout
│   ├── components.css        # Component-specific styles
│   └── responsive.css        # Mobile/tablet breakpoints
├── js/
│   └── main.js               # Mobile menu, smooth scroll, interactions
├── assets/                    # Images and other assets (if needed)
├── CNAME                      # Custom domain configuration
└── README.md                  # This file
```

## Local Development

### Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in a modern web browser
3. That's it! No build process required.

### Using a Local Server (Recommended)

For the best development experience, use a local HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization

### Updating Colors

Edit `/css/variables.css` to change the color scheme:

```css
:root {
    --midnight: #0d1117;
    --tide-blue: #5a8fa8;
    /* ... more colors */
}
```

### Updating Content

Edit `index.html` directly. Key sections:

- **Navigation**: Line ~32
- **Hero**: Line ~54
- **Services**: Line ~109
- **Projects**: Line ~165
- **Contact**: Line ~245
- **Footer**: Line ~267

### Adding Projects

To add a new project, copy this template in the projects section:

```html
<article class="project-card">
    <div class="project-preview">
        <div class="project-symbol">◢</div>
        <div class="project-label">INITIALS</div>
    </div>
    <div class="project-info">
        <h3 class="project-title">PROJECT NAME</h3>
        <p class="project-description">
            Project description goes here.
        </p>
        <div class="project-tags">
            <span class="tag">Tag 1</span>
            <span class="tag">Tag 2</span>
        </div>
    </div>
</article>
```

**Box-drawing characters for symbols**: ◢ ◣ ◥ ◤ ▣ ◫ ▦ ◧ ▨ ◨

### Adding Services

To add a new service card:

```html
<div class="service-card">
    <div class="service-icon">▣</div>
    <h3 class="service-title">SERVICE NAME</h3>
    <p class="service-description">
        Service description here.
    </p>
</div>
```

## Responsive Breakpoints

The site uses a mobile-first approach with these breakpoints:

- **Mobile**: < 768px (1 column layouts)
- **Tablet**: 768px - 1024px (2 column layouts)
- **Desktop**: > 1024px (3 column layouts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires support for:
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- ES6 JavaScript

## Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and root directory
4. Site will be available at `https://username.github.io/repo-name`

### Netlify

1. Drag and drop the entire folder to [Netlify](https://app.netlify.com/drop)
2. Or connect your GitHub repository for continuous deployment

### Vercel

```bash
npx vercel
```

### Custom Domain

The `CNAME` file is configured for `www.bluecoast.dev`. Update this file with your custom domain.

## Performance Optimizations

- ✅ Minimal CSS (organized into logical files)
- ✅ No external dependencies except fonts
- ✅ CSS variables for efficient styling
- ✅ Optimized animations (GPU-accelerated transforms)
- ✅ Grid overlay uses pseudo-elements (no extra DOM nodes)
- ✅ Lazy loading ready (add `loading="lazy"` to images)

## Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on navigation
- ✅ Focus states for keyboard navigation
- ✅ High contrast ratios (WCAG AA)
- ✅ Screen reader friendly
- ✅ Reduced motion support
- ✅ Skip links (can be added if needed)

## Future Enhancements

Optional features you might want to add:

- [ ] Blog section with individual post pages
- [ ] Case studies for projects
- [ ] Fade-in animations on scroll (code included in `main.js`, commented out)
- [ ] Dark/Light theme toggle
- [ ] Contact form with backend integration
- [ ] Project filtering by tags
- [ ] Image optimization and lazy loading
- [ ] Service worker for offline capability
- [ ] Analytics integration

## Typography

**Primary Font**: IBM Plex Mono (Google Fonts)
- Used for: All headings, navigation, terminal elements
- Weights: 400 (Regular), 600 (Semibold), 700 (Bold)

**Secondary Font**: System UI Stack
- Used for: Body text, descriptions
- Fallbacks: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif

## Credits

**Design System**: "Midnight Tide" - Terminal aesthetic with coastal discipline
**Font**: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) by IBM
**Box-drawing Characters**: Unicode geometric shapes
**Built by**: Blue Coast Software

## License

© 2025 Blue Coast Software. All rights reserved.

---

**Questions?** Email: hello@bluecoast.dev
**Location**: California
An independent guild of tools and games, built in the spirit of craft rather than commerce.

## Local Development

1. Open `index.html` in a browser
2. Edit files in `css/` and `js/` as needed
3. No build process required

## Deployment

Hosted on GitHub Pages at [bluecoast.dev](https://bluecoast.dev)

## Brand Colors

- Navy: #0D1C2E
- Gold: #E1C27D
- Coral: #D84C3F
- Teal: #15424A
- Cream: #F6F1E8
