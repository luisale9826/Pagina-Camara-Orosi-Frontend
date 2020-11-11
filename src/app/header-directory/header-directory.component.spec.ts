import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDirectoryComponent } from './header-directory.component';

describe('HeaderDirectoryComponent', () => {
  let component: HeaderDirectoryComponent;
  let fixture: ComponentFixture<HeaderDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
