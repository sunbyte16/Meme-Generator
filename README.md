# 🎭 Meme Generator

<div align="center">

![React](https://img.shields.io/badge/React-17.0.1-blue?style=for-the-badge&logo=react)
![Styled Components](https://img.shields.io/badge/Styled%20Components-5.3.0-pink?style=for-the-badge&logo=styled-components)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A modern, responsive meme generator with dark/light theme support and advanced features**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Project-green?style=for-the-badge&logo=netlify)](https://lively-dodol-cc397c.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/sunbyte16)

</div>

---

## ✨ Features

### 🎨 **Core Functionality**
- **🖼️ Image Upload**: Add any image URL to create your meme
- **📝 Text Overlay**: Add top and bottom text with customizable positioning
- **🔤 Font Size Control**: Choose from 8px to 32px font sizes
- **💾 Download**: Save your created memes as PNG files

### 🌙 **Theme Support**
- **Dark Mode**: Beautiful dark theme with glassmorphism effects
- **Light Mode**: Clean, modern light theme
- **🔄 Toggle**: Seamless switching between themes
- **💫 Animations**: Smooth transitions and hover effects

### 🚀 **Advanced Features**
- **🎯 Real-time Preview**: See your meme as you type
- **🔄 Reset Functionality**: Clear all inputs with one click
- **📱 Responsive Design**: Works perfectly on all devices
- **🎨 Modern UI**: Glassmorphism design with beautiful gradients
- **⚡ Fast Performance**: Optimized for speed and smooth interactions

---

## 🖼️ Screenshots

<div align="center">

### Light Theme
![Light Theme](https://img.shields.io/badge/Light%20Theme-Preview-blue?style=for-the-badge&logo=react)

### Dark Theme
![Dark Theme](https://img.shields.io/badge/Dark%20Theme-Preview-black?style=for-the-badge&logo=react)

**🎨 Beautiful glassmorphism design with smooth theme transitions**

</div>

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v10.13 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sunbyte16/meme-generator.git
   cd meme-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run lint` | Runs ESLint for code quality |
| `npm run format` | Formats code with Prettier |

---

## 🏗️ Project Structure

```
meme-generator/
├── public/
│   ├── img/                 # App icons and images
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   └── MemeGenerator/
│   │       ├── index.js           # Main component logic
│   │       └── styledComponents.js # Styled components
│   ├── App.js              # Root component
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 🎯 Usage Guide

### Creating Your First Meme

1. **🌙 Toggle Theme** (Optional)
   - Click the sun/moon icon in the top-right corner
   - Choose between light and dark themes

2. **🖼️ Add Image**
   - Enter an image URL in the "Image URL" field
   - Use any publicly accessible image link

3. **📝 Add Text**
   - Enter your top text in the "Top Text" field
   - Enter your bottom text in the "Bottom Text" field

4. **🔤 Choose Font Size**
   - Select from 8px to 32px using the dropdown

5. **✨ Generate Meme**
   - Click "Generate Meme" to create your meme
   - Your meme will appear in the preview area

6. **💾 Download**
   - Click "Download" to save your meme as a PNG file

7. **🔄 Reset** (Optional)
   - Click "Reset" to clear all inputs and start over

---

## 🎨 Customization

### Adding New Font Sizes
Edit the `fontSizesOptionsList` in `src/components/MemeGenerator/index.js`:

```javascript
const fontSizesOptionsList = [
  { optionId: '8', displayText: '8' },
  { optionId: '12', displayText: '12' },
  // Add your custom sizes here
  { optionId: '48', displayText: '48' },
]
```

### Styling Modifications
All styles are defined in `src/components/MemeGenerator/styledComponents.js` using styled-components.

---

## 🛡️ Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

---

## 📱 Responsive Design

- **📱 Mobile**: Optimized for screens 320px and up
- **💻 Tablet**: Enhanced layout for 768px and up
- **🖥️ Desktop**: Full-featured experience for 1200px and up

---

## 🔧 Technologies Used

- **⚛️ React 17.0.1** - Frontend framework
- **🎨 Styled Components 5.3.0** - CSS-in-JS styling
- **📦 CRACO** - Create React App Configuration Override
- **🔍 ESLint** - Code linting
- **💅 Prettier** - Code formatting
- **🧪 Jest** - Testing framework
- **📚 Testing Library** - React testing utilities

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Created By Sunil Sharma❤️**

[![GitHub](https://img.shields.io/badge/GitHub-sunbyte16-black?style=for-the-badge&logo=github)](https://github.com/sunbyte16)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sunil%20Kumar-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)
[![Portfolio](https://img.shields.io/badge/Portfolio-View%20My%20Work-green?style=for-the-badge&logo=netlify)](https://lively-dodol-cc397c.netlify.app)

</div>

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Styled Components** for the powerful styling solution
- **Open Sans** font family for beautiful typography
- **All contributors** who helped improve this project

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/sunbyte16/meme-generator?style=social)
![GitHub forks](https://img.shields.io/github/forks/sunbyte16/meme-generator?style=social)
![GitHub issues](https://img.shields.io/github/issues/sunbyte16/meme-generator?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/sunbyte16/meme-generator?style=social)

</div>

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕

</div>