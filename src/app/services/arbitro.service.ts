import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arbitro } from '../models/arbitro';

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  private apiUrl = 'http://localhost:9096/arbitros';

  constructor(private http: HttpClient) {}

  listar(): Observable<Arbitro[]> {
    return this.http.get<Arbitro[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Arbitro> {
    return this.http.get<Arbitro>(`${this.apiUrl}/${id}`);
  }

  crear(arbitro: Arbitro): Observable<Arbitro> {
    return this.http.post<Arbitro>(this.apiUrl, arbitro);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}