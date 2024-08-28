import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ApiService, ParkingLotService } from './core';
@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    ApiService,
    ParkingLotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }