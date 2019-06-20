import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionWidgetComponent } from './accordion-widget.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('⚡ Accordion Widget', () => {
  let component: AccordionWidgetComponent;
  let fixture: ComponentFixture<AccordionWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionWidgetComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AccordionWidgetComponent);
  }));

  it('🧪 should create the widget', async () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
