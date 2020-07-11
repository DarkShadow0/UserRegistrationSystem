import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { UserUpdationComponent } from './listuser/user-updation/user-updation.component';


const routes: Routes = [
  {path: 'list-all-users', component: ListuserComponent},
  {path: 'register-new-user', component: UserRegistrationComponent},
  {path: 'update-user/:id', component: UserUpdationComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
