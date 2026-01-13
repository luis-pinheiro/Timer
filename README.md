# Timer App

A simple, elegant countdown timer application available as both a web app and native desktop application.

## Features

- **Multiple time units** - Set timers in seconds, minutes, or hours
- **Desktop notifications** - Get notified every 5 minutes and when time's up
- **Responsive design** - Beautiful gradient UI that works on any screen size
- **Pause and resume** - Full control over your countdown
- **Cross-platform** - Runs in browsers or as a native desktop app (Windows, macOS, Linux)

## Screenshots

The timer features a clean, modern interface with:
- Large, easy-to-read countdown display
- Simple controls (Start, Pause, Reset)
- Customizable time input with unit selection
- Optional notification toggle

## Installation

### Option 1: Web Version (No Installation)

Simply open `timer_app.html` in any modern web browser. No server or dependencies required.

### Option 2: Desktop App

**Windows:**
1. Download `Timer Setup 1.0.0.exe` from the [releases page](#)
2. Run the installer
3. Launch Timer from your Start Menu or desktop shortcut

**macOS / Linux:**
Build from source (see below)

## Usage

1. **Set your timer:**
   - Enter a number in the input field
   - Choose the time unit (seconds, minutes, or hours)

2. **Start the countdown:**
   - Click the **Start** button
   - The timer will begin counting down

3. **Control the timer:**
   - **Pause** - Temporarily stop the countdown
   - **Reset** - Return to the initial state

4. **Notifications:**
   - Enable/disable the notification checkbox
   - Receive alerts every 5 minutes during countdown
   - Get notified when the timer finishes

## Building from Source

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/timer-app.git
cd timer-app

# Install dependencies
npm install
```

### Run in Development

```bash
npm start
```

### Build Executables

```bash
# Build for all platforms
npm run build

# Or build for specific platform
npm run build:win      # Windows (.exe)
npm run build:mac      # macOS (.dmg)
npm run build:linux    # Linux (.AppImage)
```

Built executables will be in the `dist/` folder.

## Technologies Used

- **HTML5 / CSS3 / JavaScript** - Core web technologies
- **Electron** - Desktop application framework
- **electron-builder** - Packaging and distribution
- **Web Notifications API** - Browser notifications
- **Electron Notifications** - Native desktop alerts

## Project Structure

```
Timer/
├── timer_app.html       # Complete web app (HTML + CSS + JS)
├── main.js              # Electron main process
├── preload.js           # Secure IPC bridge
├── package.json         # Dependencies and build config
├── CLAUDE.md            # Development documentation
└── README.md            # This file
```

## Security

The desktop app implements Electron security best practices:
- Context isolation enabled
- Node integration disabled
- IPC channel whitelisting
- Sandboxed renderer process

## License

MIT License - feel free to use this project however you'd like!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created with ❤️ using Claude Code

---

**Note:** This is a standalone project with no external runtime dependencies for the web version. The desktop version includes Electron, which bundles Chromium for cross-platform compatibility.
