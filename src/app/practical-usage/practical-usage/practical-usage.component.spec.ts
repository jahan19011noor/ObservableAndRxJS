import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalUsageComponent } from './practical-usage.component';

describe('PracticalUsageComponent', () => {
  let component: PracticalUsageComponent;
  let fixture: ComponentFixture<PracticalUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
