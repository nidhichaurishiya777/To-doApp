import { Component, OnInit,Input } from '@angular/core';
import {ToDoSerService} from '../../Service/to-do-ser.service';

@Component({
  selector: 'app-to-do-list-items',
  templateUrl: './to-do-list-items.component.html',
  styleUrls: ['./to-do-list-items.component.css']
})
export class ToDoListItemsComponent implements OnInit {
  
  @Input()
  private todolist: ToDoSerService;

  constructor() { }

  ngOnInit() {
  }

}
