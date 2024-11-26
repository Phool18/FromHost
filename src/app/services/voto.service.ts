import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotoService {
  private apiUrl = 'http://localhost:8081/api/votos';

  constructor(private http: HttpClient) {}


  crearVoto(votoData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, votoData);
  }
}
