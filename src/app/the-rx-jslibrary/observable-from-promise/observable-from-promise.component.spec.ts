import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFromPromiseComponent } from './observable-from-promise.component';

describe('ObservableFromPromiseComponent', () => {
  let component: ObservableFromPromiseComponent;
  let fixture: ComponentFixture<ObservableFromPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableFromPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableFromPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
