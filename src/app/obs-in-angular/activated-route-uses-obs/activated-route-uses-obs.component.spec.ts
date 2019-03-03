import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRouteUsesObsComponent } from './activated-route-uses-obs.component';

describe('ActivatedRouteUsesObsComponent', () => {
  let component: ActivatedRouteUsesObsComponent;
  let fixture: ComponentFixture<ActivatedRouteUsesObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatedRouteUsesObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedRouteUsesObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
