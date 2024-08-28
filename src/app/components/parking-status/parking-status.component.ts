import { Component, OnInit } from '@angular/core';
import { ParkingLotService } from '../../core/services/parking-lot.service';
import { ToastrService } from 'ngx-toastr';
import { CreateParkingLotComponent } from './create-parking-lot/create-parking-lot.component';
import { ParkingDetailsComponent } from '../parking-details/parking-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'swp-parking-status',
  standalone: true,
  imports:[CommonModule, CreateParkingLotComponent, ParkingDetailsComponent],
  template: `
    <div class="status-wrapper">
      <div class="card">
        <div class="card-header">
          Current Parking Status
          <button class="btn btn-link float-right" (click)="getTotalParkingSlotsCount()">
            Refresh
          </button>
        </div>
        <div class="card-body">
          <ng-container *ngIf="totalParkingSlots !== null">
            <p>Total parking slots: <strong>{{ totalParkingSlots }}</strong></p>
          </ng-container>

          <ng-container>
            <swp-create-parking-lot (createNewParkingLot)="createNewParkingLot($event)"></swp-create-parking-lot>
          </ng-container>

          <hr />

          <div class="table-responsive" *ngIf="parkingLotStatus.length > 0">
            <swp-parking-details 
              [showDelete]="true"
              (unParkVehicle)="unParkVehicle($event)"
              [parkingLotStatus]="parkingLotStatus">
            </swp-parking-details>
          </div>

        </div>
      </div>
    </div>
  `
})
export class ParkingStatusComponent implements OnInit {

  totalParkingSlots: number | null = null;
  parkingLotStatus: any[] = [];

  constructor(
    private parkingLot: ParkingLotService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getTotalParkingSlotsCount();
  }

  /**
   * Get the count of total parking lots
   */
  getTotalParkingSlotsCount() {
    this.parkingLot.getTotalParkingSlots()
      .subscribe(response => {
        if (response && response.availableSlots != null) {
          this.totalParkingSlots = response.availableSlots;
          if (this.totalParkingSlots !== null && this.totalParkingSlots > 0) {  // Null-safe check
            this.getCurrentParkingStatus();
          }
        } else {
          this.toastr.error(response?.message || 'Unknown error', 'Error');
        }
      }, error => {
        this.toastr.error('Failed to load parking slots', 'Error');
      });
  }


  /**
   * Get the current status of the Parking lot
   */
  getCurrentParkingStatus() {
    this.parkingLot.parkingStatus()
      .subscribe((res: any) => {
        if (res && res.success === 1) {
          this.parkingLotStatus = res.data;
        } else {
          this.toastr.error(res.message, 'Error');
        }
      });
  }

  /**
   * Creates a new parking lot
   * params slots: <number> 
   */
  createNewParkingLot(params: any) {
    this.parkingLot.createParkingLot(params)
      .subscribe((response: any) => {
        if (response && response.success === 1) {
          this.toastr.success(response.message, 'Success');
          this.getTotalParkingSlotsCount();
        } else {
          this.toastr.error(response.message, 'Error');
        }
      });
  }

  unParkVehicle(registrationNumber: string) {
    this.parkingLot.unParkThisVehicle({ registrationNumber }).subscribe((response: any) => {
      if (response && response.success === 1) {
        this.toastr.success(response?.data || 'Vehicle unparked successfully', 'Bye!');
        this.getCurrentParkingStatus();
      } else {
        this.toastr.error(response?.message || 'Unknown error', 'Error!');
      }
    });
  }
}
