import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { BtnWhatsappComponent } from '../app/components/btn-whatsapp/btn-whatsapp.component';
import { SiderComponent } from './components/sidenav/sidenav.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,BtnWhatsappComponent,SiderComponent,PresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'site-feli';
}
