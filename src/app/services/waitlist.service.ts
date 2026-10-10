import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WaitlistService {

// ❌ የድሮውን አጥፋና ይህንን ፍጹም የኢንተርኔት ሊንክ ተካው (ያለ :8080 ፖርት ቁጥር!)
private apiUrl = 'https://taskflow-backend-fvio.onrender.com/';

  constructor(private http: HttpClient) { }

  sendEmail(email:string):Observable<any>{
    return this.http.post(this.apiUrl, {email});
  }

}
