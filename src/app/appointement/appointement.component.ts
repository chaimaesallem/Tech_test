// src/app/appointment-list/appointment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Appointement } from '../models/appointement';
import { AppointmentService } from '../services/appointement.service';





@Component({
  selector: 'app-appointment',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointmentComponent implements OnInit {
    appointments: Appointement[] = [];

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit(): void {
        this.getAppointments();
    }

    getAppointments() {
        this.appointmentService.getAppointmentList().subscribe((data: Appointement[]) => {
            this.appointments = data;
        });
    }

    
}