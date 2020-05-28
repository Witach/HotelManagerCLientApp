import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app-component/app.component';
import {RoomListComponent} from './components/room-list/room-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {registerLocaleData} from '@angular/common';
import localePl from '@angular/common/locales/pl';
import {RoomCardComponent} from './components/room-card/room-card.component';
import {RoomComponent} from './components/room/room.component';
import {SearchComponent} from './components/search/search.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ContactComponent} from './components/contact/contact.component';
import {AgmCoreModule} from '@agm/core';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReservationDatePickerComponent} from './components/reservation-date-picker/reservation-date-picker.component';
import {ErrorInterceptor} from './components/service/error.interceptor';
import {AuthInterceptor} from './components/service/auth.interceptor';
import { AccountComponent } from './components/account/account.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    HomePageComponent,
    NavbarComponent,
    RoomCardComponent,
    RoomComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    FooterComponent,
    ReservationDatePickerComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhzAitclN7qmw36iBq7a6KiboI_dVHrdg'
    }),
    FormsModule,
  ],
  providers: [
    RoomCardComponent,
    RoomListComponent,
    ReservationDatePickerComponent,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
