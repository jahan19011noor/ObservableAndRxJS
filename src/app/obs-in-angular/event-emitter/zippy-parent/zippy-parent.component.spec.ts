import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyParentComponent } from './zippy-parent.component';

describe('ZippyParentComponent', () => {
  let component: ZippyParentComponent;
  let fixture: ComponentFixture<ZippyParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
