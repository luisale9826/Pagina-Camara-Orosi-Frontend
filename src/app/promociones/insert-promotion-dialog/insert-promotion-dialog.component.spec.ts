import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPromotionDialogComponent } from './insert-promotion-dialog.component';

describe('InsertPromotionDialogComponent', () => {
  let component: InsertPromotionDialogComponent;
  let fixture: ComponentFixture<InsertPromotionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPromotionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPromotionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
