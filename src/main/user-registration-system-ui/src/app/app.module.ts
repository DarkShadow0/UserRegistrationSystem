import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RegistrationServiceService } from './service/registration-service.service';
import { UserServiceService } from './service/user-service.service';
import { UserUpdationComponent } from './listuser/user-updation/user-updation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListuserComponent,
    UserRegistrationComponent,
    UserUpdationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistrationServiceService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
