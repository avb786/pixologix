import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitBoxComponent } from './visit-box.component';

describe('VisitBoxComponent', () => {
  let component: VisitBoxComponent;
  let fixture: ComponentFixture<VisitBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
