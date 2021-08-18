import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = localStorage;
  constructor() { }

  setItem(key, value) {
    this.storage.removeItem(key);
    this.storage.setItem(key, value);
    return value;
  }

  getItem(key) {
    return this.storage.getItem(key);
  }

}
