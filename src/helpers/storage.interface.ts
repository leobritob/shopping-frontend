export interface Storage {
  saveItem(key: string, value: any): void
  getItem(key: string): any
  deleteItem(key: string): void
}
