import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarCompanyDialogComponent } from './insertar-company-dialog.component';

describe('InsertarCompanyDialogComponent', () => {
  let component: InsertarCompanyDialogComponent;
  let fixture: ComponentFixture<InsertarCompanyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarCompanyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarCompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
