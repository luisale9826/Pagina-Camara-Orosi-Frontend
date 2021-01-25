import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPromotionDialogComponent } from './show-promotion-dialog.component';

describe('ShowPromotionDialogComponent', () => {
  let component: ShowPromotionDialogComponent;
  let fixture: ComponentFixture<ShowPromotionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPromotionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPromotionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
