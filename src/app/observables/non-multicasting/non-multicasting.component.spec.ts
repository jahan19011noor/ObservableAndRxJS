import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMulticastingComponent } from './non-multicasting.component';

describe('NonMulticastingComponent', () => {
  let component: NonMulticastingComponent;
  let fixture: ComponentFixture<NonMulticastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMulticastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMulticastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
