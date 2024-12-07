
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointement } from '../models/appointement';
import { AppointmentService } from '../services/appointement.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointement.component.html',
  styleUrls: ['./book-appointement.component.css']
})
export class BookAppointmentComponent {
  appointmentForm: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentService) {
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', [Validators.required, this.timeValidator]] 
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  // Custom time validator
  timeValidator(control: any) {
    const time = control.value;
    if (!time) {
      return null; // Don't validate if no time is selected
    }

    const selectedTime = new Date(`1970-01-01T${time}:00`);
    const startMorning = new Date('1970-01-01T08:30:00');
    const endMorning = new Date('1970-01-01T12:00:00');
    const startAfternoon = new Date('1970-01-01T14:00:00');
    const endAfternoon = new Date('1970-01-01T22:00:00');

    if ((selectedTime >= startMorning && selectedTime <= endMorning) ||
        (selectedTime >= startAfternoon && selectedTime <= endAfternoon)) {
      return null; // Valid time
    }

    return { invalidTime: true }; // Invalid time
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.appointmentForm.invalid) {
      return ;
    }

    // Create an Appointment object from the form values
    const newAppointment: Appointement = {
      id: 0, // the backend will generate the ID
      name: this.appointmentForm.value.name,
      date: this.appointmentForm.value.date,
      time: this.appointmentForm.value.time
    };

    // Call the appointment service to book the appointment
    this.appointmentService.createAppointment(newAppointment).subscribe(
      response => {
        this.successMessage = 'Appointment booked successfully!';
        this.errorMessage = null;
        this.appointmentForm.reset();
        this.submitted = false;
      },
      error => {
        this.errorMessage = 'There was an error booking your appointment. Please try again.';
        this.successMessage = null;
      }
    );
  }
}