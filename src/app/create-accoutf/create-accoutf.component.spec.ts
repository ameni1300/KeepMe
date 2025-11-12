import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccoutfComponent } from './create-accoutf.component';

describe('CreateAccoutfComponent', () => {
  let component: CreateAccoutfComponent;
  let fixture: ComponentFixture<CreateAccoutfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccoutfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccoutfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
