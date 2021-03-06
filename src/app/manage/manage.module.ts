import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ManageComponent } from './manage.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageRentalComponent } from './manage-rental/manage-rental.component';

import { AuthGuard } from '../auth/shared/auth.guard';
import { BookingService } from '../booking/shared/booking.service';
import { RentalService } from '../rental/shared/rental.service';
import { NgPipesModule } from 'ngx-pipes';
import { FormatDatePipe } from '../common/pipes/format-date-pipe';
import { ManageRentalBookingComponent } from './manage-rental/manage-rental-booking/manage-rental-booking.component';

const routes: Routes = [
  {
    path: 'manage', 
    component: ManageComponent,
    children: [
      { path: 'rentals', component: ManageRentalComponent, canActivate: [AuthGuard] },
      { path: 'bookings', component: ManageBookingComponent, canActivate: [AuthGuard] }
    ]
  }
]

@NgModule({
  declarations: [
    ManageComponent,
    ManageBookingComponent,
    ManageRentalComponent,
    ManageRentalBookingComponent,
    FormatDatePipe
  ],
  imports: [
    RouterModule.forChild(routes),
    RouterModule,
    CommonModule,
    NgPipesModule
  ],
  providers: [
   BookingService,
   RentalService
  ]
})
export class ManageModule { }
