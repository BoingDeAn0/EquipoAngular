import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAngelComponent } from './componente-angel.component';

describe('ComponenteAngelComponent', () => {
  let component: ComponenteAngelComponent;
  let fixture: ComponentFixture<ComponenteAngelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAngelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteAngelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
