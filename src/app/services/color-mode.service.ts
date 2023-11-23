import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorModeService {
  private colorModeSubject = new Subject<'light' | 'dark'>();

  colorModeChange = this.colorModeSubject.asObservable();

  private colorMode: 'light' | 'dark' = 'light';

  constructor() {
    this.initializeColorMode();
  }

  isDarkMode(): boolean {
    return this.colorMode === 'dark';
  }

  toggleColorMode(): void {
    this.colorMode = this.colorMode === 'light' ? 'dark' : 'light';
    this.saveColorModeToLocalStorage(this.colorMode);  
    this.colorModeSubject.next(this.colorMode);
  }

  private initializeColorMode(): void {
    const storedColorMode = this.loadColorModeFromLocalStorage();
    if (storedColorMode) {
      this.colorMode = storedColorMode as 'light' | 'dark';
    }
  }

  private saveColorModeToLocalStorage(colorMode: 'light' | 'dark'): void {
    localStorage.setItem('app-color-mode', colorMode);
  }

  private loadColorModeFromLocalStorage(): 'light' | 'dark' | null {
    const storedColorMode = localStorage.getItem('app-color-mode');
    return storedColorMode === 'light' || storedColorMode === 'dark'
      ? (storedColorMode as 'light' | 'dark')
      : null;
  }
}
