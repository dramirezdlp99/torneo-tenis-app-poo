import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl = 'http://localhost:9096/partidos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Partido> {
    return this.http.get<Partido>(`${this.apiUrl}/${id}`);
  }

  crear(partido: Partido): Observable<Partido> {
    return this.http.post<Partido>(this.apiUrl, partido);
  }

  registrarGanador(idPartido: number, idGanador: number): Observable<Partido> {
    return this.http.put<Partido>(`${this.apiUrl}/${idPartido}/ganador?idGanador=${idGanador}`, {});
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}