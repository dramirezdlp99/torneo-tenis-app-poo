export interface Torneo {
  id?: number;
  nombre: string;
  ciudad: string;
  pais: string;
  fechaInicio: string;
  fechaFin: string;
  premioTotal: number;
  superficie: 'ARCILLA' | 'CESPED' | 'DURA' | 'INDOOR';
  categoria: 'ATP_250' | 'ATP_500' | 'MASTERS_1000' | 'GRAND_SLAM';
}