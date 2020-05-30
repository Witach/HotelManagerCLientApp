import {Component, OnInit} from '@angular/core';
import {RoomSerching} from '../../service/room-serching';
import {RoomService} from '../../service/room.service';
import {Room} from '../../entities/room';

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
    this.roomService.getPageOfRooms({size: 20, page: 0}, this.searchItem)
      .subscribe(roomPage => {
        this.roomAmount = roomPage.page.totalElements;
        if (this.roomAmount) {
          this.roomList = roomPage.roomList;
        } else {
          this.roomList = [];
        }
      });
  }
}
