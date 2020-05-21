import { Component, OnInit } from '@angular/core';
import {faLink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faLogin = faLink;
  constructor() { }

  ngOnInit(): void {
  }

}
