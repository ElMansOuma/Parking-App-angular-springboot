// src/app/user/booking/booking.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importation de CommonModule
import { BookingService } from '../../shared/services/booking.service';
import { Booking } from '../../shared/models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule  // Ajout de CommonModule pour utiliser *ngFor et *ngIf
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  book: Booking = new Booking();  // Variable pour stocker les données du formulaire
  bookings: Booking[] = [];  // Liste des réservations
  isSubmitting = false;  // Variable pour gérer l'état de soumission

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  // Charger les réservations depuis le service
  loadBookings(): void {
    this.bookingService.getAllBookings().subscribe((data: Booking[]) => {
      console.log(data);  // Vérifier les données renvoyées
      this.bookings = data;
    });
  }

  // Ajouter une réservation
  addBooking(): void {
    this.isSubmitting = true;  // Empêcher de soumettre plusieurs fois

    console.log(this.book);  // Vérifiez les données envoyées

    this.bookingService.addBooking(this.book).subscribe(
      (response) => {
        this.loadBookings();  // Recharger la liste des réservations
        this.book = new Booking();  // Réinitialiser le formulaire après soumission
        this.isSubmitting = false;
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la réservation', error);
        this.isSubmitting = false;
      }
    );
  }

  // Supprimer une réservation
  deleteBooking(id: number | undefined): void {
    if (id === undefined) {
      console.error("ID is undefined, cannot delete booking");
      return;
    }

    this.bookingService.deleteBooking(id).subscribe(() => {
      this.loadBookings();  // Recharger la liste des réservations après suppression
    }, (error) => {
      console.error("Erreur lors de la suppression de la réservation", error);
    });
  }
}
