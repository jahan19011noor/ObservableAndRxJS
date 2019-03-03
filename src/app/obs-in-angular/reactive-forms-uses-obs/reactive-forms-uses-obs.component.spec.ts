import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsUsesObsComponent } from './reactive-forms-uses-obs.component';

describe('ReactiveFormsUsesObsComponent', () => {
  let component: ReactiveFormsUsesObsComponent;
  let fixture: ComponentFixture<ReactiveFormsUsesObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsUsesObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsUsesObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
