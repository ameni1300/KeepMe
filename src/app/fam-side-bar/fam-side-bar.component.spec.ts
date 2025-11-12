import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamSideBarComponent } from './fam-side-bar.component';

describe('FamSideBarComponent', () => {
  let component: FamSideBarComponent;
  let fixture: ComponentFixture<FamSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
