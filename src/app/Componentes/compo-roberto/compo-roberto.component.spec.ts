import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoRobertoComponent } from './compo-roberto.component';

describe('CompoRobertoComponent', () => {
  let component: CompoRobertoComponent;
  let fixture: ComponentFixture<CompoRobertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoRobertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoRobertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
