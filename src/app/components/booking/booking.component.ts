import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ParkingLotService } from '../../core/services/parking-lot.service';
import { VEHICLE_TYPES } from '../../core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'swp-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class BookingComponent implements OnInit {
  submitted = false;
  parkingForm;
  parkingSpace = {
    finding: false,
    spaceAvailable: []
  };
  reservingSpace = false;

  vehicleTypes = VEHICLE_TYPES;

  constructor(
    private parkingLot: ParkingLotService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.parkingForm = this.formBuilder.group({
      registrationNumber: ['', [
        Validators.required,
        Validators.maxLength(13),
        Validators.pattern(/^[a-zA-Z0-9-]+$/g)
      ]],
      vehicleType: ['', Validators.required]
    });
  }

  ngOnInit() { }

  // Convenience getter for easy access to form fields
  get f() { return this.parkingForm.controls; }

  // Getter method to access form controls
  get vehicleType() {
    return this.parkingForm.get('vehicleType');
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.parkingForm.invalid) {
      return false;
    }

    this.parkingSpace.finding = true;
    this.reservingSpace = true;

    this.parkingLot.findParking({ vehicleType: this.parkingForm.value.vehicleType })
      .subscribe((response: any) => {
        if (response.success === 1) {
          this.parkingSpace.spaceAvailable = response.data;
          this.parkingSpace.finding = false;
        } else {
          this.parkingSpace.spaceAvailable = [];
          this.parkingSpace.finding = false;
          this.toastr.error(response.message, 'Error');
        }
      });

    // Add a return statement for all code paths
    return null;
  }

  cancelReservingSpace() {
    this.parkingSpace.spaceAvailable = [];
    this.parkingSpace.finding = false;
    this.reservingSpace = false;
    this.parkingForm.reset();
    return;
  }

  reserveParking() {
    const parameters = {
      slots: this.parkingSpace.spaceAvailable.join(','),
      registrationNumber: this.parkingForm.value.registrationNumber,
      vehicleType: this.parkingForm.value.vehicleType
    };

    this.parkingLot.reserveParking(parameters)
      .subscribe((response: any) => {
        this.reservingSpace = false;
        if (response && response.success === 1) {
          this.toastr.success('Your vehicle has been successfully parked', 'Parked!');
        } else {
          this.toastr.error(response.message, 'Not Parked!');
        }

        this.parkingSpace.spaceAvailable = [];
        this.parkingSpace.finding = false;
        this.parkingForm.reset();
      });

    // Ensure a return value is provided
    return null;
  }
}
