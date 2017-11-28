import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitExpoComponent } from './visit-expo.component';

describe('VisitExpoComponent', () => {
  let component: VisitExpoComponent;
  let fixture: ComponentFixture<VisitExpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitExpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
