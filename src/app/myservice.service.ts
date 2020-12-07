import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor( private http: HttpClient) { } 
  login(user):Observable<any>
{
  return this.http.post("http://localhost:4000/checkuser",user);
}
signUp(user):Observable<any>
{
  return this.http.post("http://localhost:4000/user",user);
}
updateUserPassword(user):Observable<any>
{
  return this.http.put("http://localhost:4000/updateuserpassword",user);
}
sendEmail(email):Observable<any>
{
  console.log("this is goining "+email);
  return this.http.post("http://localhost:4000/sendemail",email);
}
resetUserPassword(user,token):Observable<any>
{
  return this.http.put("http://localhost:4000/resetuserpassword/"+token,user);
}
}
