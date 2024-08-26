import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ParkingLotService } from '../../core/services/parking-lot.service';
import { ToastrService } from 'ngx-toastr';
import { VEHICLE_TYPES } from '../../core';

interface VehicleDetail {
  slotNumber: number;
  registrationNumber: string;
  vehicleType: string;
}

@Component({
  selector: 'swp-find-vehicle',
  templateUrl: './find-vehicle.component.html',
  styleUrls: ['./find-vehicle.component.css']

})
export class FindVehicleComponent implements OnInit {
  vehicleDetails: VehicleDetail[] = [];
  findVehicleByRegForm;

  vehicleTypes = VEHICLE_TYPES;

  constructor(
    private formBuilder: FormBuilder,
    private parkingLotService: ParkingLotService,
    private toastr: ToastrService
  ) {
    this.findVehicleByRegForm = this.formBuilder.group({
      registrationNumber: ['', [Validators.maxLength(13), Validators.pattern(/^[a-zA-Z0-9-]+$/g)]],
      vehicleType: ['']
    });
  }

  ngOnInit() { }

  // Convenience getter for easy access to form fields
  get f() { return this.findVehicleByRegForm.controls; }

  findVehicle(): boolean {
    if (
      this.findVehicleByRegForm.value.registrationNumber !== ''
      && this.findVehicleByRegForm.value.registrationNumber != null
    ) {
      this.parkingLotService.searchVehicleLocationByRegistration(this.findVehicleByRegForm.value)
        .subscribe((response: any) => {
          if (response.data.length === 0) {
            this.toastr.error(
              `Vehicle not found with Reg. No. ${this.findVehicleByRegForm.value.registrationNumber}`,
              'Nada!'
            );
            return;
          }
          this.findVehicleByRegForm.reset();
          this.vehicleDetails = response.data;
        });
    } else if (
      this.findVehicleByRegForm.value.vehicleType != null
      && this.findVehicleByRegForm.value.vehicleType !== ''
    ) {
      this.parkingLotService.searchVehicleLocationByVehicleType(this.findVehicleByRegForm.value)
        .subscribe((response: any) => {
          if (response.data.length === 0) {
            this.toastr.error(`No vehicle found.`, 'Nada!');
            return;
          }
          this.findVehicleByRegForm.reset();
          this.vehicleDetails = response.data;
        });
    } else {
      this.toastr.error(`Please enter a registration number or select a vehicle type`, 'Error');
      return false;
    }

    return true;
  }
}
