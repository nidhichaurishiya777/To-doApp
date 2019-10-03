import { Component } from '@angular/core';
import {Todocls} from './todocls';
import {ToDoSerService} from './Service/to-do-ser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoserservice: ToDoSerService) {
  }
  title = 'TO-DO List';
}
