import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponent } from './pricing.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PriceComponent } from './price/price.component';

describe('⚡ Pricing Page', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PricingComponent,
        AccordionComponent,
        PriceComponent
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
