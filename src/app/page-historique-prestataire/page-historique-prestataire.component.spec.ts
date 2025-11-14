import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHistoriquePrestataireComponent } from './page-historique-prestataire.component';

describe('PageHistoriquePrestataireComponent', () => {
  let component: PageHistoriquePrestataireComponent;
  let fixture: ComponentFixture<PageHistoriquePrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHistoriquePrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHistoriquePrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
