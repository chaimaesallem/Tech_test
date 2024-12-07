import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointement/appointement.component';
import { AppointmentService } from './services/appointement.service';
import { HttpClientModule } from '@angular/common/http';

import { BookAppointmentComponent } from './book-appointement/book-appointement.component';
import { Appointement } from './models/appointement';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    BookAppointmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
    
  
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
