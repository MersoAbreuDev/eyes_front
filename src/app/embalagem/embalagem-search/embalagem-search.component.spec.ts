import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbalagemSearchComponent } from './embalagem-search.component';

describe('EmbalagemSearchComponent', () => {
  let component: EmbalagemSearchComponent;
  let fixture: ComponentFixture<EmbalagemSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbalagemSearchComponent]
    });
    fixture = TestBed.createComponent(EmbalagemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
