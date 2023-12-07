import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;

  clickedColumn: number;

  ngOnInit(): void {}
}
