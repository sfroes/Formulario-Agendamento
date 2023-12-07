import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
} from '@angular/core';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
import { CalendarioCustomFormatter } from './calendario-custom-formatter';

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

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;

  clickedColumn: Date;

  ngOnInit(): void {}
}
