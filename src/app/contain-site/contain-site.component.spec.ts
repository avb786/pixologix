import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainSiteComponent } from './contain-site.component';

describe('ContainSiteComponent', () => {
  let component: ContainSiteComponent;
  let fixture: ComponentFixture<ContainSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
