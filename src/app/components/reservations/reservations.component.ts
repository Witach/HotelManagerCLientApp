import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../entities/reservation';
import {Room} from '../../entities/room';
import {Bill} from '../../entities/bill';
import {Type} from '../../entities/type';
import {Tag} from '../../entities/tag';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];

  getReservations(): void{

    const types: Type[] = [
      {id: 0, name: 'jakisTyp'},
      {id: 1, name: 'jakisTyp2'},
    ];

    const tags: Tag[] = [
      {id: 0, name: 'jakisTag1'},
      {id: 1, name: 'jakisTag2'},
    ];

    const room1: Room = {id: 0, roomNumber: '23', area: 2, personAmount: 3,
      description: 'amazing description', price: 34, roomTypeSet: types, tagSet: tags};
    const room2: Room = {id: 0, roomNumber: '23', area: 2, personAmount: 3,
      description: 'amazing description', price: 34, roomTypeSet: types, tagSet: tags};

    this.reservations = [
      { id: 0, roomSet: [room1, room2], bill: null, fromDate: new Date(), toDate: new Date()},
      { id: 21, roomSet: [room1, room2], bill: null, fromDate: new Date(), toDate: new Date()},
    ];
  }

  constructor() { }

  ngOnInit(): void {
    this.getReservations();
  }

}
