# React Template

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern React template with premium custom fonts, theme switching, and a clean project structure.

## ✨ Features

- 🚀 **React 19** with latest features
- ⚡ **Vite** for lightning-fast development
- 🎨 **Tailwind CSS** for utility-first styling
- 🌓 **Dark/Light mode** with theme persistence
- 🔤 **Premium custom fonts** collection
- 📱 **Responsive design** out of the box

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Ansh-dhanani/react_template.git

# Navigate to the project directory
cd react-template

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔤 Premium Custom Fonts

This template includes a collection of premium custom fonts:

### Apple Garamond
Elegant serif font with multiple weights and styles:
- Regular (400)
- Bold (700)
- Bold Italic
- Italic
- Light (300)
- Light Italic

### MeraPro
Modern sans-serif font with clean lines

### Boone
Distinctive display font with character

### Default Lingo
Versatile sans-serif font for everyday use

### Minecraft
Pixelated monospace font inspired by the popular game

### Montblanc
Sophisticated sans-serif font with both TTF and OTF formats

### Palmore
Contemporary font family with multiple weights:
- Bold (700)
- Light (300)
- Regular (400)
- Semibold (600)

### TAN Kulture
Stylish serif font with distinctive character

Use them in your components with the corresponding CSS classes:

```jsx
<h1 className="font-apple">Apple Garamond</h1>
<p className="font-mera-pro">MeraPro</p>
<div className="font-boone">Boone</div>
<span className="font-default-lingo">Default Lingo</span>
<div className="font-minecraft">Minecraft</div>
<p className="font-montblanc">Montblanc</p>
<h2 className="font-palmore">Palmore</h2>
<h3 className="font-tan-kulture">TAN Kulture</h3>
```

## 🌓 Theme Switching

The template includes a dark/light theme system with CSS variables that persists user preferences:

```jsx
const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};
```

The theme system uses CSS variables for consistent styling:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-primary: #2563eb;
  --color-secondary: #f97316;
  --color-accent: #14b8a6;
  /* and more... */
}

.dark {
  --color-bg: #0f172a;
  --color-text: #f8fafc;
  --color-primary: #3b82f6;
  /* and more... */
}
```

## 📦 Project Structure

```
react-template/
├── public/
├── src/
│   ├── assets/
│   │   └── fonts/  # Premium custom fonts collection
│   ├── App.jsx
│   ├── index.css   # Font declarations and theme variables
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)