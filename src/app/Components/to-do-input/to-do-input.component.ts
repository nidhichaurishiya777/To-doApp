import { Component, OnInit } from '@angular/core';
import {ToDoSerService} from '../../Service/to-do-ser.service';


@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent implements OnInit {

  private listItem: string;
  constructor(private todoserservice: ToDoSerService) {
    this.listItem = '';
   }

  ngOnInit() {
  }

  addListItem() {
   console.log("In addListItem of app-to-do-input and input is -"+this.listItem);
   this.todoserservice.addListItem(this.listItem);
  }

}
