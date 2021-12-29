import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiPatiekalaComponent } from './prideti-patiekala.component';

describe('PridetiPatiekalaComponent', () => {
  let component: PridetiPatiekalaComponent;
  let fixture: ComponentFixture<PridetiPatiekalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PridetiPatiekalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PridetiPatiekalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
