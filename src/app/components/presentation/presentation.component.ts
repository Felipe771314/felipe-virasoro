import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
 name = "Felipe Virasoro"
 description = "Soy Fronted UI Developer, especializado en diseño ux/ui y  desarrollo web full stack.";
}
