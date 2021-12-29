import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaliukoMygtukasComponent } from './staliuko-mygtukas.component';

describe('StaliukoMygtukasComponent', () => {
  let component: StaliukoMygtukasComponent;
  let fixture: ComponentFixture<StaliukoMygtukasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaliukoMygtukasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaliukoMygtukasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
