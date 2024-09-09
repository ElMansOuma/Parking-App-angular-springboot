import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookingRequest } from '../../shared/models/booking-request.model';

@Component({
  selector: 'app-booking-request',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent implements OnInit {
  requests: BookingRequest[] = [];  // Typage explicite des requêtes
  newRequest: BookingRequest = { id: 0, reference: '', date: '', vehicle: '', slot: '', status: 'Pending', remarks: '' };  // Typage explicite de la nouvelle requête
  editMode: boolean = false;  // Mode édition
  requestToEdit: BookingRequest | null = null;  // Typage explicite de la requête à éditer

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  // Charger toutes les requêtes depuis le backend
  loadRequests(): void {
    this.http.get<BookingRequest[]>('http://localhost:8084/api/booking-requests').subscribe(data => {
      this.requests = data;
    });
  }

  // Ajouter ou mettre à jour une requête
  submitRequest(): void {
    if (this.editMode && this.requestToEdit) {
      // Mise à jour de la requête existante
      this.http.put(`http://localhost:8084/api/booking-requests/${this.requestToEdit.id}`, this.newRequest).subscribe(
        response => {
          this.loadRequests();
          this.resetForm();
          this.closeModal();
        },
        error => {
          console.error('Erreur lors de la mise à jour de la requête :', error);
        }
      );
    } else {
      // Créer une nouvelle requête
      this.http.post('http://localhost:8084/api/booking-requests', this.newRequest).subscribe(
        response => {
          this.loadRequests();
          this.resetForm();
          this.closeModal();
        },
        error => {
          console.error('Erreur lors de l\'ajout de la requête :', error);
        }
      );
    }
  }

  // Supprimer une requête de réservation
  deleteRequest(index: number): void {
    const request: BookingRequest = this.requests[index];  // Accéder à la requête via l'index
    this.http.delete(`http://localhost:8084/api/booking-requests/${request.id}`).subscribe(() => {
      this.loadRequests();  // Recharger la liste après suppression
    }, error => {
      console.error('Erreur lors de la suppression de la requête :', error);
    });
  }

  // Éditer une requête existante
  editRequest(index: number): void {
    if (typeof index === 'number' && this.requests.length > index) {
      const request: BookingRequest = this.requests[index];  // Accéder à la requête via l'index
      this.newRequest = { ...request };  // Copier la requête dans le formulaire
      this.requestToEdit = request;
      this.editMode = true;  // Passer en mode édition
    }
  }

  // Réinitialiser le formulaire
  resetForm(): void {
    this.newRequest = { id: 0, reference: '', date: '', vehicle: '', slot: '', status: 'Pending', remarks: '' };
    this.requestToEdit = null;
    this.editMode = false;
  }

  // Fermer le modal
  // Fermer le modal
  closeModal(): void {
    const modalElement = document.getElementById('addRequestModal') as HTMLElement;
    const modal = (window as any)['bootstrap'].Modal.getInstance(modalElement);  // Spécifiez 'window' comme 'any'
    modal.hide();
  }

}
