import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoMiguelComponent } from './compo-miguel.component';

describe('CompoMiguelComponent', () => {
  let component: CompoMiguelComponent;
  let fixture: ComponentFixture<CompoMiguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoMiguelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
