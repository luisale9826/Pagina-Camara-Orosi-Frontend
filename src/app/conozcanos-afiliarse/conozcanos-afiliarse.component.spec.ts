import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConozcanosAfiliarseComponent } from './conozcanos-afiliarse.component';

describe('ConozcanosAfiliarseComponent', () => {
  let component: ConozcanosAfiliarseComponent;
  let fixture: ComponentFixture<ConozcanosAfiliarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConozcanosAfiliarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConozcanosAfiliarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
