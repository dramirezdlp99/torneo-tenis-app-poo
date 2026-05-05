import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private apiUrl = 'http://localhost:9096/jugadores';

  constructor(private http: HttpClient) {}

  listar(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl}/${id}`);
  }

  crear(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(this.apiUrl, jugador);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}