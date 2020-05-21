import { Component, OnInit } from '@angular/core';
import {faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faLogin = faLink;
  constructor() { }

  ngOnInit(): void {
  }

}
