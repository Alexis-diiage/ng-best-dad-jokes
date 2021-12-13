import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient ) { }

  getAll():Observable<any>{
    console.log(this.http.get<any>('http://localhost:3001/posts'));
    
    return this.http.get<any>('http://localhost:3001/posts');
  }
}
