import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { PriceWidgetComponent } from './price-widget/price-widget.component';
import { AccordionWidgetComponent } from './accordion-widget/accordion-widget.component';

@NgModule({
  declarations: [PricingComponent, PriceWidgetComponent, AccordionWidgetComponent],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
