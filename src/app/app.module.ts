import { registerLocaleData } from '@angular/common';
import localePtExtra from '@angular/common/locales/extra/pt';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarMomentDateFormatter,
  DateAdapter,
  MOMENT,
} from 'angular-calendar';
import { ContextMenuModule } from 'ngx-contextmenu';
import * as moment from 'moment';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { CalendarioCabecalhoComponent } from './componentes/calendario/calendario-cabecalho/calendario-cabecalho.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}
registerLocaleData(localePt, 'pt-BR', localePtExtra);
@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    CalendarioCabecalhoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: momentAdapterFactory,
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CalendarMomentDateFormatter,
        },
      }
    ),
  ],
  providers: [
    {
      provide: MOMENT,
      useValue: moment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
