import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWidgetComponent } from './filter-widget.component';

describe('FilterWidgetComponent', () => {
  let component: FilterWidgetComponent;
  let fixture: ComponentFixture<FilterWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
