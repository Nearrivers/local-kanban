import { config } from 'dotenv'
import { app, BrowserWindow } from 'electron'
import * as path from 'node:path'
import './ipc'

config()

let mainWindow: BrowserWindow | null = null

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: true,
      contextIsolation: true,
    },
  })

  console.log(process.env['ENV'])

  if (process.env['ENV'] === 'production') {
    win.loadFile(path.join(__dirname, 'app', 'index.html'))
  } else win.loadURL('http://127.0.0.1:4200/')

  win.maximize()

  return win
}

app.whenReady().then(() => {
  mainWindow = createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
