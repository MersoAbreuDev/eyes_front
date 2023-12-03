import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaComponent } from './legenda.component';

describe('LegendaComponent', () => {
  let component: LegendaComponent;
  let fixture: ComponentFixture<LegendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegendaComponent]
    });
    fixture = TestBed.createComponent(LegendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
