import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('dark'); // Valor predeterminado del tema
  theme$ = this.themeSubject.asObservable();

  switchTheme(): void {
    const newTheme = this.themeSubject.value === 'dark' ? 'light' : 'dark';
    console.log('Changing theme to:', newTheme);
    this.themeSubject.next(newTheme);
  }
}
