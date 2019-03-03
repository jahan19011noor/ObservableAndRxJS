import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationUpdatesComponent } from './geolocation-updates.component';

describe('GeolocationUpdatesComponent', () => {
  let component: GeolocationUpdatesComponent;
  let fixture: ComponentFixture<GeolocationUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
