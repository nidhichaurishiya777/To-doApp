import { Injectable } from '@angular/core';
import {Todocls} from '../todocls';

@Injectable({
  providedIn: 'root'
})
export class ToDoSerService {

  private nextId: number;

  constructor() {
 let todolist = this.getToDoList();
 if (todolist == null) {
   this.nextId = 0;
 } else {
  //this.nextId=1;
   let maxId = todolist[todolist.length - 1].id;
   this.nextId=maxId+1;
   console.log('next id-' + this.nextId);
 }
  }

  
  public getToDoList(): Todocls[] {
let localStorageList = JSON.parse(localStorage.getItem('todolist'));
    return localStorageList==null ? []: localStorageList.todolist;
      }
    
    public addListItem(listItem : string){
      let listItemValue= new Todocls(this.nextId, listItem);
  let todolist = this.getToDoList();
  todolist.push(listItemValue);
  this.setToDoList(todolist);
  this.nextId++;
  console.log('next id in add method-' + this.nextId);
    }
    
    private setToDoList(todolist: Todocls[]){
      localStorage.setItem('todolist',JSON.stringify({ todolist:todolist }));
    }

}
