import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LoginCredentials} from '../entities/login-credentials';
import {map} from 'rxjs/operators';
import {UserModel} from '../entities/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<LoginCredentials>;
  public currentUser: Observable<LoginCredentials>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginCredentials>(JSON.parse(localStorage.getItem('userValue')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get userValue(): LoginCredentials {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<LoginCredentials> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Authorization', 'Basic ' + window.btoa(username + ':' + password));
    return this.http.post<any>(`${environment.linkForBackend}/auth`, {headers: httpHeaders})
      .pipe(map(val => {
        const user: LoginCredentials = {
          token: window.btoa(username + ':' + password),
          username
        };
        localStorage.setItem('userValue', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(newUser: UserModel): Observable<any> {
    return this.http.post(environment.linkForBackend + '/register', newUser);
  }

  logout() {
    localStorage.removeItem('userValue');
    this.currentUserSubject.next(null);
  }

}
