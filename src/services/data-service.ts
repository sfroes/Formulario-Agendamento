import { Injectable } from '@angular/core';
import { EventoCalendarioModel } from '../models/evento-calendario-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataSourceEventos: EventoCalendarioModel[] = [];
}
