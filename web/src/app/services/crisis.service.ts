import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  private BASE_URL: string;
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
    this.BASE_URL = 'http://127.0.0.1:3000/crisis';
   }
   createCrisis(crisis: any): Observable<any> {
    const url = `${this.BASE_URL}/create`;
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    // tslint:disable-next-line:object-literal-shorthand
    return this._http.post<any>(url, crisis, {headers: headers});
   }
   getCrisis(): Observable<any[]> {
     const url = this.BASE_URL;
     return this._http.get<any[]>(url);
   }
}
