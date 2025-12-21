import { Component, OnInit} from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
// import { SharingServiceService } from '../sharing-service.service';
import { FetchNotesServiceService } from '../fetch-notes-service.service';
import { DeleteNotesServiceService } from '../delete-notes-service.service';
import { UpdateNotesServiceService } from '../update-notes-service.service';

interface Note{
  id: string,
  body: string
}

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent {
  newTodo: any[] = [];
  viewTodo: any[] = [];  
  // toHideUpdateBox: boolean = true;
  toUpdateContent: string = "";
  constructor(private fetchNotes: FetchNotesServiceService, private deleteNotes: DeleteNotesServiceService, private updateNotes: UpdateNotesServiceService){ 
 
    // this.viewTodo = getShared.getData();
 
  }

  refreshNotes(){
    this.fetchNotes.fetchNotes().subscribe(data => {
    
      this.viewTodo = data;
      
    })
  }


  ngOnInit():void{
    this.refreshNotes();
  }

  deleteNote(toDelete: any){
    try {
    this.deleteNotes.deleteNote(toDelete).subscribe();
    alert("Deleted Successfully from Database") 
      this.refreshNotes();

    } catch (error) {
      alert("Somethings Wrong");
    }
  }

  isEdit(toUpdateNote:any){
    toUpdateNote.isEditing = true;
  }



  updateNote(note: any){
    if (note.body.trim() !="") {
      try {
        this.updateNotes.updateNote({id: note._id, body: note.body}).subscribe();
        alert("Note is updated successfully")
        this.refreshNotes();
      } catch (error) {
        alert("Error updating note");
      }
    } 
    
    else if(note.body.trim() == "") {
      alert("Please Enter Note"); 
    }
  }

  cancelUpdateNote(note: any){
    const originalNote = note;
    note.isEditing = false;
  }

}
