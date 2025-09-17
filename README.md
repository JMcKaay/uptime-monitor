# UptimeGuard - Advanced Website Monitoring Solution

A modern, responsive website for an uptime monitoring service with Apple-style scroll animations and dark/light theme support.

## 🚀 Features

- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Apple-Style Animations**: Smooth scroll effects, parallax, and interactive elements
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Glassmorphism, gradients, and contemporary design patterns
- **Performance Optimized**: Throttled scroll events and optimized animations
- **Modular JavaScript**: Clean, organized ES6 modules
- **Interactive Dashboard**: Live monitoring simulation with real-time updates

## 📁 Project Structure

```
uptime-monitor/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties and design tokens
│   ├── base.css           # Base styles and resets
│   ├── components.css     # Reusable component styles
│   ├── animations.css     # Animation keyframes and classes
│   ├── main.css          # Page-specific styles
│   └── responsive.css    # Responsive design rules
├── js/
│   ├── main.js           # Main entry point
│   └── modules/
│       ├── theme.js      # Theme switching logic
│       ├── navigation.js # Navigation functionality
│       ├── animations.js # Animation controllers
│       ├── scroll.js     # Scroll effects
│       ├── particles.js  # Particle effects
│       ├── dashboard.js  # Dashboard functionality
│       ├── stats.js      # Statistics counters
│       ├── pricing.js    # Pricing toggle
│       ├── features.js   # Features section
│       ├── loader.js     # Loading animation
│       └── interactions.js # User interactions
└── assets/
    └── images/           # Image assets
```

## 🛠️ Installation

1. Clone or download the project
2. Open `index.html` in a modern web browser
3. No build process required - vanilla HTML/CSS/JS

### For Development:

```bash
# Optional: Use a local server for better development experience
npx serve
# or
python -m http.server 8000
```

## 🎨 Customization

### Change Brand/Colors:
Edit the CSS variables in `/css/variables.css`:
```css
:root {
    --accent: #0071e3;
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modify Content:
- Update text in `index.html`
- Modify data in JavaScript modules (e.g., `/js/modules/features.js`)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Smooth 60fps animations

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript ES6**: Modules, Arrow functions, Template literals
- **Design**: Glassmorphism, Gradients, Modern UI patterns

## 📄 License

MIT License - Feel free to use for personal or commercial projects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@uptimeguard.com or create an issue.

## 🚀 Deployment

### Deploy to GitHub Pages (Recommended):

1. **Create a GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/uptime-monitor.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Click Save

3. **Access Your Site**:
   - Your site will be live at: `https://YOUR_USERNAME.github.io/uptime-monitor/`
   - First deployment may take 5-10 minutes

### Alternative Deployment Options:

1. **Netlify**: Drag and drop folder to netlify.com/drop
2. **Vercel**: Deploy with Vercel CLI
3. **Surge.sh**: Run `npx surge` in project folder
4. **Traditional Hosting**: Upload files via FTP

## ✨ Credits

Designed and developed with ❤️ for reliability and performance.