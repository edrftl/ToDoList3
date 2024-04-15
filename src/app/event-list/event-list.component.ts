import { Component } from '@angular/core';
import { EventElementComponent } from '../event-element/event-element.component';
import { IEvent } from '../event';
import { EVENTS } from '../event-mock';
import { EventCreateComponent } from '../event-create/event-create.component';

@Component({
  selector: 'app-event-list',
  standalone: true,
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css',
  imports: [EventElementComponent, EventCreateComponent],
})
export class EventListComponent {
  events: IEvent[] = [...EVENTS];

  deleteEvent(id: number) {
    let index = this.events.findIndex((x) => x.id == id);
    this.events.splice(index, 1);
  }

  SortByName() {
    this.events.sort((a, b) => {
      if (!a.text && !b.text) return 0;
      if (!a.text) return 1;
      if (!b.text) return -1;
      return a.text.localeCompare(b.text);
    });
  }

  SortByDate() {
    this.events.sort((a, b) => {
      if (a.date && b.date) {
        return a.date.getTime() - b.date.getTime();
      } else if (!a.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  createEvent(event: IEvent) {
    event.id = 10;
    event.date = new Date(2002, 1, 12);
    event.classes = ['hgwrhe'];
    console.log(event);

    this.events.push(event);
  }
}
