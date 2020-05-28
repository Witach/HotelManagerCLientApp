import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoomListComponent} from './components/room-list/room-list.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {RoomCardComponent} from './components/room-card/room-card.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchComponent} from './components/search/search.component';
import {RoomComponent} from './components/room/room.component';
import {AccountComponent} from './components/account/account.component';


const routes: Routes = [
  {path: 'rooms', component: RoomListComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'roomCard', component: RoomCardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'room/:id', component: RoomComponent},
  {path: 'account/:email', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
