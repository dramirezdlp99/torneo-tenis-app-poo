import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Torneo } from '../models/torneo';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private apiUrl = 'http://localhost:9096/torneos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Torneo> {
    return this.http.get<Torneo>(`${this.apiUrl}/${id}`);
  }

  crear(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(this.apiUrl, torneo);
  }

  calcularPremio(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${id}/premio`);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}