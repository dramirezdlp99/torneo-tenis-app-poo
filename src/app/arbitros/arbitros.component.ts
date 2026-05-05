import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Arbitro } from '../models/arbitro';
import { ArbitroService } from '../services/arbitro.service';

@Component({
  selector: 'app-arbitros',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule,
            MatButtonModule, MatTableModule, MatIconModule, MatCardModule],
  templateUrl: './arbitros.component.html',
  styleUrl: './arbitros.component.css'
})
export class ArbitrosComponent implements OnInit {

  arbitros: Arbitro[] = [];
  mensaje: string = '';
  columnas: string[] = ['id', 'nombre', 'apellido', 'nacionalidad', 'correo', 'licencia', 'aniosExperiencia', 'acciones'];

  nuevoArbitro: Arbitro = {
    nombre: '', apellido: '', nacionalidad: '',
    correo: '', licencia: '', aniosExperiencia: 0
  };

  constructor(private arbitroService: ArbitroService) {}

  ngOnInit(): void {
    this.cargarArbitros();
  }

  cargarArbitros(): void {
    this.arbitroService.listar().subscribe({
      next: (data) => this.arbitros = data,
      error: (err) => this.mensaje = 'Error al cargar árbitros: ' + err.message
    });
  }

  crearArbitro(): void {
    this.arbitroService.crear(this.nuevoArbitro).subscribe({
      next: () => {
        this.mensaje = 'Árbitro creado exitosamente';
        this.cargarArbitros();
        this.nuevoArbitro = {
          nombre: '', apellido: '', nacionalidad: '',
          correo: '', licencia: '', aniosExperiencia: 0
        };
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }

  eliminarArbitro(id: number): void {
    this.arbitroService.eliminar(id).subscribe({
      next: () => {
        this.mensaje = 'Árbitro eliminado';
        this.cargarArbitros();
      },
      error: (err) => this.mensaje = 'Error: ' + err.error
    });
  }
}