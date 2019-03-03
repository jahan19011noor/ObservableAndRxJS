import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentialBackoffComponent } from './exponential-backoff.component';

describe('ExponentialBackoffComponent', () => {
  let component: ExponentialBackoffComponent;
  let fixture: ComponentFixture<ExponentialBackoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExponentialBackoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponentialBackoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
