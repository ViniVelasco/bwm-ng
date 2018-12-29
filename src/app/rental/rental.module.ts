import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';

import { HelperService } from '../common/service/helper.service';
import { RentalService } from './shared/rental.service';
import { BookingService } from '../booking/shared/booking.service';

const routes: Routes = [
  { path: 'rentals', 
   component: RentalComponent,
   children: [
    { path: '', component: RentalListComponent },
    { path: ':rentalId', component: RentalDetailComponent, canActivate: [AuthGuard]  }
   ]
  }
]

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalDetailBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker,
    FormsModule
  ],
  providers: [
    RentalService, 
    HelperService,
    BookingService
  ]
})
export class RentalModule {}