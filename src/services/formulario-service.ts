import { DataService } from './data-service';
import { EventoCalendarioModel } from '../models/evento-calendario-model';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DAYS_OF_WEEK } from 'angular-calendar';

moment.updateLocale('en', {
  week: {
    dow: DAYS_OF_WEEK.MONDAY,
    doy: 0,
  },
});

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private DataService: DataService) {}

  preencherDataSource() {
    this.DataService.dataSourceEventos = this.buscarEventosGeral();
  }

  buscarEventosGeral(): EventoCalendarioModel[] {
    const retorno: EventoCalendarioModel[] = [];

    retorno.push(
      {
        data: moment().add(1, 'days').toDate(),
        horaFim: '10:00',
        horaIncio: '09:00',
        seq: 1,
        opcoesEvento: ['Escolha certa', 'escolha errada'],
        titulo: 'Primeiro evento',
      },
      {
        data: moment().add(1, 'days').toDate(),
        horaFim: '15:00',
        horaIncio: '14:00',
        seq: 2,
        opcoesEvento: ['Estou a tarde', 'Fui para a tarde'],
        titulo: 'Segundo evento',
      },
      {
        data: moment().add(2, 'days').toDate(),
        horaFim: '19:00',
        horaIncio: '18:00',
        seq: 3,
        opcoesEvento: ['Outro dia', 'Novo dia'],
        titulo: 'terceiro evento',
      }
    );
    return retorno;
  }
}
