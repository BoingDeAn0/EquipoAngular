import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDylanComponent } from './compo-dylan.component';

describe('CompoDylanComponent', () => {
  let component: CompoDylanComponent;
  let fixture: ComponentFixture<CompoDylanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoDylanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoDylanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
