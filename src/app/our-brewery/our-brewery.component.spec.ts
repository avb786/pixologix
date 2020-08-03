import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBreweryComponent } from './our-brewery.component';

describe('OurBreweryComponent', () => {
  let component: OurBreweryComponent;
  let fixture: ComponentFixture<OurBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
