import { Storage } from './storage.interface'

export class LocalStorage implements Storage {
  saveItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    if (!key) return

    const value = localStorage.getItem(key)

    if (!value) return

    return JSON.parse(value)
  }

  deleteItem(key: string): void {
    localStorage.removeItem(key)
  }
}
