import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiekioMygtukasComponent } from './kiekio-mygtukas.component';

describe('KiekioMygtukasComponent', () => {
  let component: KiekioMygtukasComponent;
  let fixture: ComponentFixture<KiekioMygtukasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiekioMygtukasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiekioMygtukasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
