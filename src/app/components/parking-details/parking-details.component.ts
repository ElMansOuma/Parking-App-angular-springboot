import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'swp-parking-details',
  templateUrl: './parking-details.component.html'
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
