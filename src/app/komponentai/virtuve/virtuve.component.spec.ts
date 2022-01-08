import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuveComponent } from './virtuve.component';

describe('VirtuveComponent', () => {
  let component: VirtuveComponent;
  let fixture: ComponentFixture<VirtuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtuveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
