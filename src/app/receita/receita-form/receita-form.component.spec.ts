import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaFormComponent } from './receita-form.component';

describe('ReceitaFormComponent', () => {
  let component: ReceitaFormComponent;
  let fixture: ComponentFixture<ReceitaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaFormComponent]
    });
    fixture = TestBed.createComponent(ReceitaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
