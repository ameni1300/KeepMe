import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireProfileComponent } from './prestataire-profile.component';

describe('PrestataireProfileComponent', () => {
  let component: PrestataireProfileComponent;
  let fixture: ComponentFixture<PrestataireProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
