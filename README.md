# React Template

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.46-5A0EF8?style=for-the-badge&logo=daisyui)

A modern React template with custom fonts, theme switching, and a clean project structure.

## ✨ Features

- 🚀 **React 19** with latest features
- ⚡ **Vite** for lightning-fast development
- 🎨 **Tailwind CSS** for utility-first styling
- 🌸 **DaisyUI** for beautiful UI components
- 🌓 **Dark/Light mode** with theme persistence
- 🔤 **Custom fonts** including Apple Garamond, MeraPro, and more
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

## 🔤 Custom Fonts

This template includes several custom fonts:

- Apple Garamond
- MeraPro
- Boone
- Default Lingo
- Minecraft
- Montblanc
- Palmore
- TAN Kulture

Use them in your components with the corresponding CSS classes:

```jsx
<h1 className="font-apple">Apple Garamond</h1>
<p className="font-mera-pro">MeraPro</p>
<div className="font-boone">Boone</div>
```

## 🌓 Theme Switching

The template includes a dark/light theme switch that persists user preferences:

```jsx
const toggleTheme = () => {
  const html = document.querySelector('html');
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};
```

## 📦 Project Structure

```
react-template/
├── public/
├── src/
│   ├── assets/
│   │   └── fonts/
│   ├── App.jsx
│   ├── index.css
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
- [DaisyUI](https://daisyui.com/)