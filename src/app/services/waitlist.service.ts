import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WaitlistService {

  private apiUrl = 'http://localhost:8080/api/waitlist';

  constructor(private http: HttpClient) { }

  sendEmail(email:string):Observable<any>{
    return this.http.post(this.apiUrl, {email});
  }

}
