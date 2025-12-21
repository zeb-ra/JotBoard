import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Note{
  id:string,
  body:string
}


@Injectable({
  providedIn: 'root'
})
export class UpdateNotesServiceService {
  apiurl: string = `${environment.apiUrl}/updateNote`; 
  constructor(private http: HttpClient) { }

  updateNote(note: Note):Observable<any>{
    // alert(JSON.stringify(note));
    return this.http.put(this.apiurl, note);
  }
}
