import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsFromCounterComponent } from './obs-from-counter.component';

describe('ObsFromCounterComponent', () => {
  let component: ObsFromCounterComponent;
  let fixture: ComponentFixture<ObsFromCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsFromCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsFromCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
