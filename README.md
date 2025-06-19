# ALPHA TV

ALPHA TV is a React-based web application designed to provide a real-time visual overview of the key points of the ALPHA experiment apparatus at CERN. The app displays the current status of critical components, highlighting any errors and providing contextual information for each element.

## Features

- **Interactive Schematic:** View the ALPHA apparatus schematic with clickable and hoverable indicators for each monitored element.
- **Real-Time Status:** Each key point is represented by a colored indicator:
  - **Green:** Normal operation
  - **Red:** Error detected
- **Detailed Info:** Hovering over an indicator displays detailed information, including the element's name, error status, and comments.
- **Responsive UI:** The layout adapts to different screen sizes and devices.

## How It Works

- The main interface shows the ALPHA-g schematic with overlayed indicators.
- Indicators are positioned using percentage coordinates relative to the schematic image.
- Clicking anywhere on the schematic shows the relative coordinates (for debugging or adding new points).
- Hovering over an indicator displays a tooltip with more information about that element.

## Project Structure

```
alphaTV/
├── src/
│   ├── App.jsx
│   ├── MainTitle.jsx
│   ├── MainFrame.jsx
│   ├── Blink.jsx
│   ├── DisplayInfo.jsx
│   ├── assets/
│   └── styles/
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sniang/alphaTV.git
   cd alphaTV
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization

- To add or modify monitored elements, edit the relevant data array in `App.jsx`.
- To update the schematic or logo, replace the images in `src/assets/`.

## Author

- Samuel Niang

## License

This project is for educational and demonstration purposes related to the ALPHA experiment at CERN. It is not intended for production use. 
