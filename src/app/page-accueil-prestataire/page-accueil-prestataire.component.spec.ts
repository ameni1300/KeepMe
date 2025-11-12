import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilPrestataireComponent } from './page-accueil-prestataire.component';

describe('PageAccueilPrestataireComponent', () => {
  let component: PageAccueilPrestataireComponent;
  let fixture: ComponentFixture<PageAccueilPrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccueilPrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAccueilPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
