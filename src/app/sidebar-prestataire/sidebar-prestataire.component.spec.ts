import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPrestataireComponent } from './sidebar-prestataire.component';

describe('SidebarPrestataireComponent', () => {
  let component: SidebarPrestataireComponent;
  let fixture: ComponentFixture<SidebarPrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
