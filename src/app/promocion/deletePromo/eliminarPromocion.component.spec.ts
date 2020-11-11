import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPromocionComponent } from './eliminarPromocion.component';

describe('PromocionComponent', () => {
  let component: EliminarPromocionComponent;
  let fixture: ComponentFixture<EliminarPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
