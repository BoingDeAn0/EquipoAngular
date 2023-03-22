import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoRubComponent } from './compo-rub.component';

describe('CompoRubComponent', () => {
  let component: CompoRubComponent;
  let fixture: ComponentFixture<CompoRubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoRubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoRubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
