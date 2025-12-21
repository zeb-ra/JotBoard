import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Note{
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchNotesServiceService {
  apiurl: string = `${environment.apiUrl}/getNote`;
  constructor(private http: HttpClient) { }


  fetchNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.apiurl);
  }
}
