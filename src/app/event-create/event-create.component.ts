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
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (!this.createForm.valid) {
      alert('Invalid data!');
      return;
    }

    const event = this.createForm.value as IEvent;
    console.log(event);

    // send user to parent component
    this.createEvent.emit(event);
  }
}
