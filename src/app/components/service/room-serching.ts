export interface RoomSerching {
  fromDate?: Date;
  toDate?: Date;
  area?: number;
  personAmount?: number;
  tags?: string[];
  types?: string[];
  fromPrice?: number;
  toPrice?: number;
}


export function validRoomSearching(roomSearching: RoomSerching): boolean {
  const datePredicate = roomSearching.fromDate > roomSearching.toDate;
  const pricePredicate = roomSearching.fromPrice > roomSearching.toPrice;
  return  !(datePredicate && pricePredicate);
}
