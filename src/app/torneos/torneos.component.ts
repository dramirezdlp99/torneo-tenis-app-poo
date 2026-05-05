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
import { Torneo } from '../models/torneo';
import { TorneoService } from '../services/torneo.service';

@Component({
  selector: 'app-torneos',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule,
            MatButtonModule, MatTableModule, MatIconModule, MatCardModule, MatSelectModule],
  templateUrl: './torneos.component.html',
  styleUrl: './torneos.component.css'
})
export class TorneosComponent implements OnInit {

  torneos: Torneo[] = [];
  mensaje: string = '';
  columnas: string[] = ['id', 'nombre', 'ciudad', 'pais', 'fechaInicio', 'fechaFin', 'premioTotal', 'superficie', 'categoria', 'acciones'];

  nuevoTorneo: Torneo = {
    nombre: '', ciudad: '', pais: '',
    fechaInicio: '', fechaFin: '', premioTotal: 0,
    superficie: 'ARCILLA', categoria: 'ATP_250'
  };

  constructor(private torneoService: TorneoService) {}

  ngOnInit(): void {
    this.cargarTorneos();
  }

  cargarTorneos(): void {
    this.torneoService.listar().subscribe({
      next: (data) => this.torneos = data,
      error: (err) => this.mensaje = 'Error al cargar torneos: ' + err.message
    });
  }

  crearTorneo(): void {
    this.torneoService.crear(this.nuevoTorneo).subscribe({
      next: () => {
        this.mensaje = 'Torneo creado exitosamente';
        this.cargarTorneos();
        this.nuevoTorneo = {
          nombre: '', ciudad: '', pais: '',
          fechaInicio: '', fechaFin: '', premioTotal: 0,
          superficie: 'ARCILLA', categoria: 'ATP_250'
        };
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }

  calcularPremio(id: number): void {
    this.torneoService.calcularPremio(id).subscribe({
      next: (data) => this.mensaje = `Premio al ganador: $${data}`,
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }

  eliminarTorneo(id: number): void {
    this.torneoService.eliminar(id).subscribe({
      next: () => {
        this.mensaje = 'Torneo eliminado';
        this.cargarTorneos();
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }
}