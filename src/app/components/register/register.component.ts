import {Component, OnInit} from '@angular/core';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faLogin = faLink;
  registerForm: FormGroup;

  err = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(24),
        Validators.minLength(8)
      ])],
      repeatPassword: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(24),
        Validators.minLength(8)
      ])],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(18)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(18)
      ])],
      pesel: ['', Validators.compose([
        Validators.pattern(/^[0-9]{11}$/),
        Validators.required
      ])],
      contact: ['', Validators.compose([
        Validators.pattern(/^[0-9]{9}$/),
        Validators.required
      ])]
    }, {validators: this.checkIfRepeatPasswordEqToPassword});
  }

  checkIfRepeatPasswordEqToPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');
    return password && repeatPassword && password.value === repeatPassword.value ? null : {passwordNotTheSame: true};
  };

  onSubmit(): void {
    const {email, password, contact, name: firstName, lastName, pesel} = this.registerForm.value;
    console.log(this.registerForm);
    this.userService.register({email, password, contact, firstName, lastName, pesel})
      .subscribe(res => console.log('Stworzono użytkownika'),
        err => {
          if (err.status === 409) {
            this.err = 'Użytkownik o podanym email już istnieje';
          } else {
            this.err = 'Coś poszło nie tak';
          }
        });
  }
}
