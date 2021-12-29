import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaliukaiComponent } from './staliukai.component';

describe('StaliukaiComponent', () => {
  let component: StaliukaiComponent;
  let fixture: ComponentFixture<StaliukaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaliukaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaliukaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
