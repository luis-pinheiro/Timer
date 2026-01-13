const { contextBridge, ipcRenderer } = require('electron');

// Expose a secure API to the renderer process
contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: (channel, data) => {
            // Whitelist channels for security
            const validChannels = ['notify'];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            } else {
                console.error(`Invalid IPC channel: ${channel}`);
            }
        }
    }
});
