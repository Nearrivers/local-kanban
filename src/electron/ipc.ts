import { ipcMain, IpcMainInvokeEvent } from 'electron'

// https://stackoverflow.com/questions/59889729/what-is-the-difference-between-ipc-send-on-and-invoke-handle-in-electron
// ipcMain.on is based on events that means that you can't directly return a value on call (you have to emit a new Event to renderer)
// ipcMain.handle is based on promises that means that you can return a value directly to renderer when function invoke is called

// Test function
ipcMain.handle('ping', (event: IpcMainInvokeEvent) => {
  return 'pong'
})

export default ipcMain
