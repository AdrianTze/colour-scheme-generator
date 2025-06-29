# Colour Scheme Generator

A modern, web-based tool for generating beautiful and harmonious colour schemes for web design, UI/UX projects, and creative work. Built with vanilla JavaScript and powered by professional colour theory algorithms.

![Colour Scheme Generator](https://img.shields.io/badge/status-active-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Node.js](https://img.shields.io/badge/node.js-v14%2B-green)

## 🎨 Features

- **Professional Colour Theory**: Powered by [The Color API](https://www.thecolorapi.com/) for accurate colour harmony algorithms
- **8 Colour Harmony Modes**:
  - Monochrome (standard, dark, light variations)
  - Analogic and Analogic Complement
  - Complement
  - Triad
  - Quad
- **Interactive Colour Picker**: Choose any seed colour as your starting point
- **One-Click Copy**: Click any hex code to copy it to your clipboard
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Real-time Preview**: See colour schemes generated instantly

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AdrianTze/colour-scheme-generator.git
   cd colour-scheme-generator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 🎯 Usage

1. **Select a seed colour**: Use the colour picker to choose your base colour
2. **Choose a harmony mode**: Select from 8 different colour theory algorithms
3. **Generate scheme**: Click "Get Scheme" to create your 5-colour palette
4. **Copy colours**: Click on any hex code to copy it to your clipboard
5. **Experiment**: Try different combinations to find the perfect palette

### Colour Harmony Modes Explained

- **Monochrome**: Variations of a single hue with different saturation and lightness
- **Analogic**: Colours adjacent to your seed colour on the colour wheel
- **Complement**: Colours opposite to your seed colour for high contrast
- **Triad**: Three colours evenly spaced around the colour wheel
- **Quad**: Four colours forming a rectangle on the colour wheel

## 🛠️ Technical Details

### Built With

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **API**: The Color API for colour theory calculations
- **Styling**: Modern CSS with Flexbox and CSS Grid

### Project Structure

```
colour-scheme-generator/
├── src/
│   ├── index.html      # Main HTML structure
│   ├── style.css       # CSS styling and layout
│   └── app.js          # JavaScript functionality
├── server.js           # Express server for development
├── package.json        # Node.js dependencies and scripts
└── README.md          # Project documentation
```

## 🎨 Use Cases

- **Web Design**: Create cohesive colour palettes for websites
- **UI/UX Design**: Generate accessible colour schemes for applications
- **Graphic Design**: Find harmonious colours for print and digital media
- **Brand Design**: Develop colour identities for businesses
- **Art Projects**: Explore colour relationships for creative work

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions

- Add export functionality (CSS, SCSS, JSON formats)
- Implement colour palette saving/loading
- Add accessibility contrast checking
- Create additional colour harmony algorithms
- Improve mobile responsiveness
- Add colour name suggestions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Color API](https://www.thecolorapi.com/) for providing professional colour theory algorithms
- Color theory principles from traditional art and design education
- The open-source community for inspiration and best practices

---

**Made with ❤️ for designers and developers**
