import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendario-cabecalho',
  templateUrl: './calendario-cabecalho.component.html',
  styleUrls: ['./calendario-cabecalho.component.scss'],
})
export class CalendarioCabecalhoComponent implements OnInit {
  ngOnInit(): void {}

  @Input() view: CalendarView;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}
