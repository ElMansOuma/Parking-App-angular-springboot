import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  // Corrected to styleUrls
})
export class HomeComponent {

}
