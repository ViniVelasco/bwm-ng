import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from './shared/payment.service';
import { PaymentComponent } from './payment.component';



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    PaymentService
  ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentModule {}