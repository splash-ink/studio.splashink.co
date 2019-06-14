import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { GalleryWidgetComponent } from './gallery-widget.component';

describe('⚡ Gallery Widget', () => {
  let component: GalleryWidgetComponent;
  let fixture: ComponentFixture<GalleryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryWidgetComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryWidgetComponent);
  }));


  it('🧪 should create the widget', async () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
