import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponent } from './pricing.component';
import { AccordionWidgetComponent } from './accordion-widget/accordion-widget.component';
import { PriceWidgetComponent } from './price-widget/price-widget.component';

describe('⚡ Pricing Page', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PricingComponent,
        AccordionWidgetComponent,
        PriceWidgetComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🧪 should create component', () => {
    expect(component).toBeTruthy();
  });
});
