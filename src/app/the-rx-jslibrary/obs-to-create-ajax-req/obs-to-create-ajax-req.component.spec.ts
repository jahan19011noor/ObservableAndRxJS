import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsToCreateAjaxReqComponent } from './obs-to-create-ajax-req.component';

describe('ObsToCreateAjaxReqComponent', () => {
  let component: ObsToCreateAjaxReqComponent;
  let fixture: ComponentFixture<ObsToCreateAjaxReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsToCreateAjaxReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsToCreateAjaxReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
