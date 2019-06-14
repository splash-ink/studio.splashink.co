import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FilterWidgetComponent } from './filter-widget.component';
import { GalleryWidgetComponent } from '../gallery-widget/gallery-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FilterWidgetComponent', () => {
  let component: FilterWidgetComponent;
  let fixture: ComponentFixture<FilterWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWidgetComponent, GalleryWidgetComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
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
