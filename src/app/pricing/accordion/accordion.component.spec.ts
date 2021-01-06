import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('⚡ Accordion Widget', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AccordionComponent);
  }));

  it('🧪 should create the widget', async () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
