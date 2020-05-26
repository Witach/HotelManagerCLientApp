import {Component, OnInit} from '@angular/core';
import {faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';
import {RoomService} from '../service/room.service';
import {Reservation} from '../entities/reservation';
import {Router} from '@angular/router';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {Room} from '../entities/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  faPlus = faPlus;
  roomId: number;
  roomReservations: Reservation[] = [];
  room: Room;

  constructor(private roomService: RoomService, private router: Router) {
  }

  ngOnInit(): void {
    this.roomId = +this.router.url.split('/').pop();
    this.roomService.getOneRoom(this.roomId).subscribe(room => this.room = room);
    this.roomService.getRoomReservations(this.roomId)
      .subscribe(value => this.roomReservations = value);
  }



}
