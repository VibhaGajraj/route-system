import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnMapsComponent } from './view-on-maps.component';

describe('ViewOnMapsComponent', () => {
  let component: ViewOnMapsComponent;
  let fixture: ComponentFixture<ViewOnMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
