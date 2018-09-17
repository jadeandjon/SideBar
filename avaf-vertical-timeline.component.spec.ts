import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvafVerticalTimelineComponent } from './avaf-vertical-timeline.component';

describe('BuxVerticalTimelineComponent', () => {
  let component: AvafVerticalTimelineComponent;
  let fixture: ComponentFixture<AvafVerticalTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvafVerticalTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvafVerticalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
