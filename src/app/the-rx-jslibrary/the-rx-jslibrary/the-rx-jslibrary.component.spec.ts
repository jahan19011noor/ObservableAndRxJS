import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRxJslibraryComponent } from './the-rx-jslibrary.component';

describe('TheRxJslibraryComponent', () => {
  let component: TheRxJslibraryComponent;
  let fixture: ComponentFixture<TheRxJslibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRxJslibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRxJslibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
