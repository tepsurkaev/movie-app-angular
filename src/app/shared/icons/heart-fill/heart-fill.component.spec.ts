import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartFillComponent } from './heart-fill.component';

describe('HeartFillComponent', () => {
  let component: HeartFillComponent;
  let fixture: ComponentFixture<HeartFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeartFillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeartFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
