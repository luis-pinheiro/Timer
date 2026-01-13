const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        },
        title: 'Timer',
        icon: path.join(__dirname, 'build/icon.png'),
        resizable: true,
        minimizable: true,
        maximizable: true
    });

    mainWindow.loadFile('timer_app.html');

    // Open DevTools in development (optional - remove in production)
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Handle notification requests from renderer process
ipcMain.on('notify', (event, data) => {
    const { title, body } = data;

    // Check if notifications are supported
    if (Notification.isSupported()) {
        const notification = new Notification({
            title: title || 'Timer',
            body: body || '',
            icon: path.join(__dirname, 'build/icon.png'),
            silent: false
        });

        notification.show();

        // Optional: Handle notification click
        notification.on('click', () => {
            if (mainWindow) {
                if (mainWindow.isMinimized()) {
                    mainWindow.restore();
                }
                mainWindow.focus();
            }
        });
    }
});

// App lifecycle handlers
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        // On macOS, recreate window when dock icon is clicked
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
