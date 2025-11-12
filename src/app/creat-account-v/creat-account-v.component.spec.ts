import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAccountVComponent } from './creat-account-v.component';

describe('CreatAccountVComponent', () => {
  let component: CreatAccountVComponent;
  let fixture: ComponentFixture<CreatAccountVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatAccountVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatAccountVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
