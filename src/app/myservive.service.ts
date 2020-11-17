import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviveService {

  constructor( private http: HttpClient) { } 
  login(user):Observable<any>
{
  return this.http.post("http://localhost:4000/checkuser",user);
}
signUp(user):Observable<any>
{
  return this.http.post("http://localhost:4000/user",user);
}
}
