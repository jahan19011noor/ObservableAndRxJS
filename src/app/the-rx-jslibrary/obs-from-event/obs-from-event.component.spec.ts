import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsFromEventComponent } from './obs-from-event.component';

describe('ObsFromEventComponent', () => {
  let component: ObsFromEventComponent;
  let fixture: ComponentFixture<ObsFromEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsFromEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsFromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
