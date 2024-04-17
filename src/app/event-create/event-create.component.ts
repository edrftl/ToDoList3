import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IEvent } from '../event';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.css',
})
export class EventCreateComponent {
  @Output() createEvent = new EventEmitter<IEvent>();

  // form group
  createForm = this.fb.group({
    text: ['', Validators.required],
    date: [new Date().toISOString().split('T')[0]],
    important: [false],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    const formValue = this.createForm.value;

    // Convert formValue.date to Date if it exists, otherwise use current date
    const dateValue = formValue.date ? new Date(formValue.date) : new Date();

    const event: IEvent = {
      id: 0,
      text: formValue.text as string,
      date: dateValue, // use converted date value
      classes: [], // add 'important' class if true
    };
    if (formValue.important == true) event.classes.push('important');

    console.log(event);

    this.createEvent.emit(event);
  }
}
