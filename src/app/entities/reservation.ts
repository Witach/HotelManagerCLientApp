import {Room} from './room';
import {Bill} from './bill';

export interface Reservation {
  id: number;
  roomSet: Array<Room>;
  bill: Bill;
  fromDate: Date;
  toDate: Date;
}
