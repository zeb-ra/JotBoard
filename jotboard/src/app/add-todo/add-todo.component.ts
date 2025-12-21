import { Component } from '@angular/core';
// import { SharingServiceService } from '../sharing-service.service';
import { SendNotesServiceService } from '../send-notes-service.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // todoList: string[] = [];
  newTodo: any = "";

  constructor(private sendNotes: SendNotesServiceService){}

  addTodo(){
    // this.todoList = this.todoList+this.newTodo; old way
    // this.todoList.push(this.newTodo); new way
    
    if (this.newTodo.trim() && this.newTodo.trim() !=" ") {
      // this.sendShared.setData(this.newTodo);
      this.sendNotes.sendNote({body: this.newTodo}).subscribe() ; //we did body:this.newTodo so as to convert string to JSON
    }

  }


}
