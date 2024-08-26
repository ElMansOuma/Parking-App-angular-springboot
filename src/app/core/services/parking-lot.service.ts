import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) { }

  getTotalParkingSlots(): Observable<any> {
    return this.httpClient.get(environment.api_url);
  }

  createParkingLot(params: any): Observable<any> {
    return this.httpClient.post(`${environment.api_url}/create`, params, this.options);
  }

  findParking(params: any): Observable<any> {
    let data = new HttpParams();
    data = data.append('vehicleType', params.vehicleType);
    return this.httpClient.get(`${environment.api_url}/find/parking`, { params: data });
  }

  searchVehicleLocationByRegistration(params: any): Observable<any> {
    let data = new HttpParams();
    data = data.append('registrationNumber', params.registrationNumber);
    return this.httpClient.get(`${environment.api_url}/find/vehicle`, { params: data });
  }

  searchVehicleLocationByVehicleType(params: any): Observable<any> {
    let data = new HttpParams();
    data = data.append('vehicleType', params.vehicleType);
    return this.httpClient.get(`${environment.api_url}/find/vehicle`, { params: data });
  }

  reserveParking(params: any): Observable<any> {
    return this.httpClient.post(`${environment.api_url}/park`, params, this.options);
  }

  unParkThisVehicle(params: any): Observable<any> {
    let data = new HttpParams();
    data = data.append('registrationNumber', params.registrationNumber);
    return this.httpClient.request('delete', `${environment.api_url}/unpark`, { body: data });
  }

  parkingStatus(): Observable<any> {
    return this.httpClient.get(`${environment.api_url}/status`);
  }
}
