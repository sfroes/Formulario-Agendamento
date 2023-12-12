export interface EventoCalendarioModel {
  seq: number;
  data: Date;
  horaIncio: string;
  horaFim: string;
  opcoesEvento: string[];
  titulo: string;
}
