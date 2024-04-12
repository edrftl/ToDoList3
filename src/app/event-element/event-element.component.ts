import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../event';

@Component({
  selector: 'li[app-event-element]',
  standalone: true,
  imports: [],
  templateUrl: './event-element.component.html',
  styleUrl: './event-element.component.css'
})
export class EventElementComponent {

  @Output() deleteEvent = new EventEmitter<number>();

  @Input()
  event: IEvent = {
    id: 0,
    text: "",
    classes: [],
    date: null
  }

  onClick() {
    const index = this.event.classes.indexOf("done");
    if (index !== -1) {
      this.event.classes.splice(index, 1);
    } else {
      this.event.classes.push("done");
    }
  }

  onDelete() {
    this.deleteEvent.emit(this.event.id);
  }
}
