import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../Services/theme-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}
  switchTheme(): void {
    const nav = document.getElementById('navbar');
    const body = document.getElementById('body');

    if (nav && body) {
      const currentTheme = nav.getAttribute('data-bs-theme');
      const bodyTheme = body.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' && bodyTheme === 'dark' ? 'light' : 'dark';
      nav.setAttribute('data-bs-theme', newTheme);
    } else {
      console.error('El elemento nav no se encontró en el DOM.');
    }
  }
}
