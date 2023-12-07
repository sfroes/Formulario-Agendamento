import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCabecalhoComponent } from './calendario-cabecalho.component';

describe('CalendarioCabecalhoComponent', () => {
  let component: CalendarioCabecalhoComponent;
  let fixture: ComponentFixture<CalendarioCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioCabecalhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
