import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {faCalendarAlt, faSearch} from '@fortawesome/free-solid-svg-icons';
import {RoomSerching} from '../service/room-serching';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RoomService} from '../service/room.service';
import {Room} from '../entities/room';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchItem: RoomSerching = {};
  roomList: Room[] = [];
  roomAmount = 0;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.roomService.getPageOfRooms({size: 20, page: 0}, {})
      .subscribe(roomList => {
        this.roomList = roomList.roomList;
        this.roomAmount = roomList.page.totalElements;
      });
  }

  onSearchSelected(searchItem: RoomSerching) {
    this.searchItem = searchItem;
    this.roomService.getPageOfRooms({size: 20, page: 1}, this.searchItem)
      .subscribe( roomPage => {
        this.roomAmount = roomPage.page.totalElements;
        this.roomList = roomPage.roomList;
      });
  }
}
