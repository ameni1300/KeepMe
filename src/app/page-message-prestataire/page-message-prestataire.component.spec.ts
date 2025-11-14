import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMessagePrestataireComponent } from './page-message-prestataire.component';

describe('PageMessagePrestataireComponent', () => {
  let component: PageMessagePrestataireComponent;
  let fixture: ComponentFixture<PageMessagePrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMessagePrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMessagePrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
