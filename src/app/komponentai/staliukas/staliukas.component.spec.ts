import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaliukasComponent } from './staliukas.component';

describe('StaliukasComponent', () => {
  let component: StaliukasComponent;
  let fixture: ComponentFixture<StaliukasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaliukasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaliukasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
