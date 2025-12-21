import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Note{
  body: string;
}


@Injectable({
  providedIn: 'root'
})


export class SendNotesServiceService {
  apiurl: string = `${environment.apiUrl}/postNote`;

  constructor(private http: HttpClient) { }

  sendNote(newNote: Note): Observable<any>{
    return this.http.post(this.apiurl, newNote)
  }
}
