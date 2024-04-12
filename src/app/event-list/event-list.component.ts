import { Component } from '@angular/core';
import { EventElementComponent } from "../event-element/event-element.component";
import { IEvent } from '../event';
import { EVENTS } from '../event-mock';

@Component({
    selector: 'app-event-list',
    standalone: true,
    templateUrl: './event-list.component.html',
    styleUrl: './event-list.component.css',
    imports: [EventElementComponent]
})
export class EventListComponent {
    events: IEvent[] = [...EVENTS];

    deleteEvent(id: number) {
        let index = this.events.findIndex(x => x.id == id);
        this.events.splice(index, 1);
    }

    // sortEventsByDate() {
    //     this.events.sort((a, b) => (a.date && b.date) ? a.date.getTime() + b.date.getTime() : !a.date ? 1 : -1);
    // }

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
}
