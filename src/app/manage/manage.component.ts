import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental/shared/rental.service';
import { BookingService } from '../booking/shared/booking.service';


@Component({
  selector: 'bwm-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
