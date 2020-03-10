import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { PriceComponent } from './price/price.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [PricingComponent, PriceComponent, AccordionComponent],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
