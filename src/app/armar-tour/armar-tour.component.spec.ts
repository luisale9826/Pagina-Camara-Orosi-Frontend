import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmarTourComponent } from './armar-tour.component';

describe('ArmarTourComponent', () => {
  let component: ArmarTourComponent;
  let fixture: ComponentFixture<ArmarTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmarTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmarTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
