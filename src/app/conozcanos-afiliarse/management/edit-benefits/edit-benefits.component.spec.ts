import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenefitsComponent } from './edit-benefits.component';

describe('EditBenefitsComponent', () => {
  let component: EditBenefitsComponent;
  let fixture: ComponentFixture<EditBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
