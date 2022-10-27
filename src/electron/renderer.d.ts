import { DesktopCapturerSource } from 'electron'

export interface IElectronAPI {
  nodeVersion: () => Promise<string>
  chromeVersion: () => Promise<string>
  electronVersion: () => Promise<string>
  ping: () => Promise<string>
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
