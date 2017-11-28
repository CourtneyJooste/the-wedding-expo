import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinAWeddingComponent } from './win-a-wedding.component';

describe('WinAWeddingComponent', () => {
  let component: WinAWeddingComponent;
  let fixture: ComponentFixture<WinAWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinAWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinAWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
