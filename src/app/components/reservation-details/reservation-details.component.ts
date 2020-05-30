import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../entities/reservation';
import {Room} from '../../entities/room';
import {Bill} from '../../entities/bill';
import {Person} from '../../entities/person';
import {User} from '../../entities/user';
import {Contact} from '../../entities/contact';
import {Type} from '../../entities/type';
import {Tag} from '../../entities/tag';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  bill: Bill;

  constructor() {
  }

  ngOnInit(): void {
    this.getBill();
  }

  getBill(): void {
    const room: Room = {
      id: 0,
      roomNumber: '24',
      area: 20,
      personAmount: 4,
      description: 'Wpaniały pokój dla całej rodziny. Na wyposażeniu wszystko co niezbędne! \"It has a little something for everyone\". 10/10 - IGN',
      price: 120.00,
      roomTypeSet: null,
      tagSet: null
    };

    const roomArray: Room[] = [room];  // to sie pozniej zmieni

    const someReservation: Reservation = {
      id: 0,
      roomSet: roomArray,
      bill: null,
      fromDate: new Date(),
      toDate: new Date()
    };

    const person: Person = {
      id: 0,
      firstName: 'Angela',
      lastName: 'Merkel',
      bill: null,
      user: null,
      contactSet: null
    };

    this.bill = {
      id: 0,
      price: 324.34,
      reservation: someReservation,
      tenant: person,
      administrator: null
    };
  }

}
