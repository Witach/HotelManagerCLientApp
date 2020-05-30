import {Component, OnInit} from '@angular/core';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {tokenReference} from '@angular/compiler';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faLogin = faLink;
  err = '';

  isEmailValid = true;
  isPasswordValid = true;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(formRef: NgForm) {
    let flag = true;
    // const pass = formRef.value.pass;
    // const email = formRef.value.email;
    // if (!pass || !this.validatePass(pass)) {
    //   flag = false;
    //   this.isPasswordValid = false;
    //   this.err = 'Hasło jest niepoprawne';
    // }
    // if (!email || !this.validateEmail(email)) {
    //   flag = false;
    //   this.isEmailValid = false;
    //   this.err = 'Email jest niepoprawny';
    // }
    if (flag) {
      this.userService.login('admin@wp.pl', 'dupa')
        .subscribe( val => console.log(val));
    }
  }

  validatePass(pass: string): boolean {
    return pass.length >= 6 && !pass.includes(' ');
  }

  validateEmail(email: string): boolean {
    return email.length >= 6 && email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).length !== 0;
  }

}
