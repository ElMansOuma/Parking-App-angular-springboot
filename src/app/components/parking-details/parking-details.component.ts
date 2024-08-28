import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VehicleTypePipe } from '../../shared';

@Component({
  selector: 'swp-parking-details',
  templateUrl: './parking-details.component.html',
  standalone:true,
  imports:[CommonModule, VehicleTypePipe]
})
export class ParkingDetailsComponent implements OnInit {


  @Input() parkingLotStatus: Array<any> = [];
  @Input() showDelete: boolean = false;
  @Output() unParkVehicle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  delete(registrationNumber: string) {
    this.unParkVehicle.emit(registrationNumber);
  }
}
