import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderService } from '../../components/template/header/header.service';
import { ForDirective } from '../../directives/for.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, ForDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  /**
   *
   */
  constructor(headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    };
  }
}
