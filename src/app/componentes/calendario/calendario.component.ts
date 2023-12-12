import { FormularioService } from './../../../services/formulario-service';
import { DataService } from './../../../services/data-service';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
import { CalendarioCustomFormatter } from './calendario-custom-formatter';
import * as moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendario.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CalendarioCustomFormatter,
    },
  ],
})
export class CalendarioComponent implements OnInit {
  @Input() locale: string = 'pt-BR';
  horariosEvento: CalendarEvent[] = [];
  opcoesDia: string[] = [];
  loading: boolean = false;
  formOpcao: FormGroup;

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;

  clickedColumn: Date;

  constructor(
    private DataService: DataService,
    private FormularioService: FormularioService,
    private Fb: FormBuilder,
    private Cb: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.FormularioService.preencherDataSource();
    this.preencherEventos();
    this.inicialializaFormulario();
  }

  preencherEventos() {
    this.DataService.dataSourceEventos.forEach((f) => {
      f.data.setHours(0, 0, 0);
      let evento: CalendarEvent = {
        start: moment(f.data).add(f.horaIncio, 'hours').toDate(),
        end: moment(f.data).add(f.horaFim).toDate(),
        title: f.titulo,
        meta: f.seq,
      };
      this.events.push(evento);
    });
  }

  inicialializaFormulario() {
    this.formOpcao = this.Fb.group({
      opcaoDia: [null],
    });
  }

  selecionarHorarios(diaSelecionado: Date) {
    if (diaSelecionado.toDateString() != new Date().toDateString()) {
      diaSelecionado.setHours(0, 0, 0);
    } else {
      diaSelecionado.setHours(
        new Date().getHours(),
        new Date().getMinutes(),
        0
      );
    }
    this.horariosEvento = [];
    this.opcoesDia = [];
    this.events.forEach((f) => {
      if (
        f.start >= diaSelecionado &&
        f.end.toDateString() === diaSelecionado.toDateString()
      ) {
        this.horariosEvento.push(f);
      }
    });
  }

  selecionarOpcoesDia(seqEvento: number) {
    this.opcoesDia = [];
    this.opcoesDia.push(
      ...this.DataService.dataSourceEventos.find((f) => f.seq == seqEvento)
        .opcoesEvento
    );
  }

  SalvarDiaEvento() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.horariosEvento = [];
      this.opcoesDia = [];
      this.Cb.detectChanges();
    }, 2000);
  }
}
