import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaitlistService {

  // 🔗 ያገኘኸው ትክክለኛው የRender ባኬንድ ሊንክ ከነ መድረሻ መስመሩ (/api/waitlist) ተኳቷል!
  private apiUrl = 'https://taskflow-backend-6bl6.onrender.com/'
  constructor(private http: HttpClient) { }

  sendEmail(email: string): Observable<any> {
    return this.http.post(this.apiUrl, { email });
  }
}
