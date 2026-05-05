import { Jugador } from './jugador';
import { Arbitro } from './arbitro';
import { Torneo } from './torneo';

export interface Partido {
  id?: number;
  idTorneo: number;
  idJugador1: number;
  idJugador2: number;
  idArbitro: number;
  idGanador?: number;
  resultado?: string;
  duracionMinutos?: number;
  ronda: 'PRIMERA' | 'SEGUNDA' | 'TERCERA' | 'OCTAVOS' | 'CUARTOS' | 'SEMIFINAL' | 'FINAL';
  estado: 'PROGRAMADO' | 'EN_CURSO' | 'FINALIZADO' | 'CANCELADO';
  torneo?: Torneo;
  jugador1?: Jugador;
  jugador2?: Jugador;
  arbitro?: Arbitro;
  ganador?: Jugador;
}