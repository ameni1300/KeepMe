import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPresComponent } from './reservation-pres.component';

describe('ReservationPresComponent', () => {
  let component: ReservationPresComponent;
  let fixture: ComponentFixture<ReservationPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationPresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
