import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsInAngularComponent } from './obs-in-angular.component';

describe('ObsInAngularComponent', () => {
  let component: ObsInAngularComponent;
  let fixture: ComponentFixture<ObsInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
