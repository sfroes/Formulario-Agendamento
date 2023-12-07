import {
  CalendarNativeDateFormatter,
  DateFormatterParams,
} from 'angular-calendar';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable()
export class CalendarioCustomFormatter extends CalendarNativeDateFormatter {
  // you can override any of the methods defined in the parent class

  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'HH:mm', locale);
  }

  public weekViewHour({ date, locale }: DateFormatterParams): string {
    return this.dayViewHour({ date, locale });
  }
}
