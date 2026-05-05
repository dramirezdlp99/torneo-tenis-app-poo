import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Jugador } from '../models/jugador';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule,
            MatButtonModule, MatTableModule, MatIconModule, MatCardModule],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit {

  jugadores: Jugador[] = [];
  mensaje: string = '';
  columnas: string[] = ['id', 'nombre', 'apellido', 'nacionalidad', 'correo', 'ranking', 'puntosAcumulados', 'titulos', 'acciones'];

  nuevoJugador: Jugador = {
    nombre: '', apellido: '', nacionalidad: '',
    correo: '', ranking: 0, puntosAcumulados: 0, titulos: 0
  };

  constructor(private jugadorService: JugadorService) {}

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.jugadorService.listar().subscribe({
      next: (data) => this.jugadores = data,
      error: (err) => this.mensaje = 'Error al cargar jugadores: ' + err.message
    });
  }

  crearJugador(): void {
    this.jugadorService.crear(this.nuevoJugador).subscribe({
      next: () => {
        this.mensaje = 'Jugador creado exitosamente';
        this.cargarJugadores();
        this.nuevoJugador = {
          nombre: '', apellido: '', nacionalidad: '',
          correo: '', ranking: 0, puntosAcumulados: 0, titulos: 0
        };
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }

  eliminarJugador(id: number): void {
    this.jugadorService.eliminar(id).subscribe({
      next: () => {
        this.mensaje = 'Jugador eliminado';
        this.cargarJugadores();
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }
}