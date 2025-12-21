import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class DeleteNotesServiceService {
    apiurl: string = `${environment.apiUrl}/deleteNote`;
  constructor(private http: HttpClient) { }



  deleteNote(id:any):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`)
  }
}
