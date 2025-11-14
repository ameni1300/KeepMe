import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInvitationPrestataireComponent } from './page-invitation-prestataire.component';

describe('PageInvitationPrestataireComponent', () => {
  let component: PageInvitationPrestataireComponent;
  let fixture: ComponentFixture<PageInvitationPrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInvitationPrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInvitationPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
