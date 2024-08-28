import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})
export class VehiculeComponent {
  categories = [
    { id: 1, name: 'General', description: 'General category description' },
  ];
}
