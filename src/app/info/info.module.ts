import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import {SharedModule} from '../shared/shared.module';
import {RegistrationModule} from '../registration/registration.module';
import {AppComponent} from '../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {LoginModule} from '../login/login.module';
import {AuthenticationService} from '../services/authentication.service';

@NgModule({
  declarations: [
    InfoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegistrationModule,
    SharedModule,
    CommonModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})

export class InfoModule { }
