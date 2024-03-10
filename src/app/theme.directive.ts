import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { ThemeService } from './Services/theme-service.service';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnChanges {
  @Input('appTheme') theme: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2, private themeService: ThemeService) {}

  ngOnChanges(): void {
    if (this.theme) {
      this.setTheme(this.el.nativeElement);
    } else {
      this.themeService.theme$.subscribe(theme => {
        this.setTheme(this.el.nativeElement, theme);
      });
    }
  }

  private setTheme(element: HTMLElement, theme?: string): void {
    const newTheme = theme || this.theme;
    this.renderer.setAttribute(element, 'data-bs-theme', newTheme);
    document.body.setAttribute('data-bs-theme', newTheme);

    // También cambiamos el tema en la etiqueta 'nav'
    const navElement = document.getElementById('navbar');
    if (navElement) {
      navElement.setAttribute('data-bs-theme', newTheme);
    } else {
      console.error('Elemento nav no encontrado.');
    }
  }
}
