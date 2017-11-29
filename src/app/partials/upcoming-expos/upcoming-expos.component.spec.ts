import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingExposComponent } from './upcoming-expos.component';

describe('UpcomingExposComponent', () => {
  let component: UpcomingExposComponent;
  let fixture: ComponentFixture<UpcomingExposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingExposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingExposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
