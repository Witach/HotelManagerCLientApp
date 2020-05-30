import {Person} from './person';

export interface User {
  id: number;
  email: string;
  person: Person;
}
