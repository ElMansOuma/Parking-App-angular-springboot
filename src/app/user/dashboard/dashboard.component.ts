import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dashboard-app',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [RouterLink] // Corrected to styleUrls

})
export class DashboardComponent {

}





