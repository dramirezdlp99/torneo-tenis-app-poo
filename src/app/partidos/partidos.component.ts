import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { Partido } from '../models/partido';
import { PartidoService } from '../services/partido.service';

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule,
            MatButtonModule, MatTableModule, MatIconModule, MatCardModule, MatSelectModule],
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.css'
})
export class PartidosComponent implements OnInit {

  partidos: Partido[] = [];
  mensaje: string = '';
  idGanador: number = 0;
  idPartidoSeleccionado: number = 0;
  columnas: string[] = ['id', 'torneo', 'jugador1', 'jugador2', 'arbitro', 'ronda', 'estado', 'resultado', 'ganador', 'acciones'];

  nuevoPartido: Partido = {
    idTorneo: 0, idJugador1: 0, idJugador2: 0,
    idArbitro: 0, resultado: '', duracionMinutos: 0,
    ronda: 'PRIMERA', estado: 'PROGRAMADO'
  };

  constructor(private partidoService: PartidoService) {}

  ngOnInit(): void {
    this.cargarPartidos();
  }

  cargarPartidos(): void {
    this.partidoService.listar().subscribe({
      next: (data) => this.partidos = data,
      error: (err) => this.mensaje = 'Error al cargar partidos: ' + err.message
    });
  }

  crearPartido(): void {
    this.partidoService.crear(this.nuevoPartido).subscribe({
      next: () => {
        this.mensaje = 'Partido creado exitosamente';
        this.cargarPartidos();
        this.nuevoPartido = {
          idTorneo: 0, idJugador1: 0, idJugador2: 0,
          idArbitro: 0, resultado: '', duracionMinutos: 0,
          ronda: 'PRIMERA', estado: 'PROGRAMADO'
        };
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }

  registrarGanador(): void {
    this.partidoService.registrarGanador(this.idPartidoSeleccionado, this.idGanador).subscribe({
      next: () => {
        this.mensaje = 'Ganador registrado y puntos actualizados';
        this.cargarPartidos();
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }

  eliminarPartido(id: number): void {
    this.partidoService.eliminar(id).subscribe({
      next: () => {
        this.mensaje = 'Partido eliminado';
        this.cargarPartidos();
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }
}