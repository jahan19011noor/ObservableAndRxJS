import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryRequestComponent } from './retry-request.component';

describe('RetryRequestComponent', () => {
  let component: RetryRequestComponent;
  let fixture: ComponentFixture<RetryRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
