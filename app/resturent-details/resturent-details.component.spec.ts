import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentDetailsComponent } from './resturent-details.component';

describe('ResturentDetailsComponent', () => {
  let component: ResturentDetailsComponent;
  let fixture: ComponentFixture<ResturentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
