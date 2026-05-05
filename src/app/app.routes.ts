import { Routes } from '@angular/router';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { ArbitrosComponent } from './arbitros/arbitros.component';
import { TorneosComponent } from './torneos/torneos.component';
import { PartidosComponent } from './partidos/partidos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'jugadores', pathMatch: 'full' },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'arbitros', component: ArbitrosComponent },
  { path: 'torneos', component: TorneosComponent },
  { path: 'partidos', component: PartidosComponent }
];