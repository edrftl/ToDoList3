import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from "./event-list/event-list.component";
//import { EventListComponent } from "./event-list/event-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EventListComponent]
})
export class AppComponent {
  title = 'ToDoList3';
}