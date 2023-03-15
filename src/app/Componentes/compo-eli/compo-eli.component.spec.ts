import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoEliComponent } from './compo-eli.component';

describe('CompoEliComponent', () => {
  let component: CompoEliComponent;
  let fixture: ComponentFixture<CompoEliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoEliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoEliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
