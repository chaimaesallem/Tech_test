// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointement } from '../models/appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
    private baseUrl = 'http://localhost:8080/api/appointments'; // Remplacez par l'URL de votre API

    constructor(private httpClient: HttpClient) { }

    getAppointmentList(): Observable<Appointement[]> {
        return this.httpClient.get<Appointement[]>(this.baseUrl);
    }

    createAppointment(appointment: Appointement): Observable<Object> {
        return this.httpClient.post(this.baseUrl, appointment);
    }


}