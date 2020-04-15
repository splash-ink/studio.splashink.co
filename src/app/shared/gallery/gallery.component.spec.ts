import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { GalleryComponent } from './gallery.component';

describe('⚡ Gallery Widget', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
  }));


  it('🧪 should create the widget', async () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
