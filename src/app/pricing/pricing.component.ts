import { Component, OnInit } from '@angular/core';
import { PriceModel } from './price.model';
import { PRICINGS, QnA } from 'app/data';
import { AccordionModel } from './accordion-widget/accordion.model';

@Component({
  templateUrl: './pricing.component.html',
  styles: []
})
export class PricingComponent implements OnInit {

  docs: PriceModel [];
  qna: AccordionModel [];
  constructor() { }

  ngOnInit() {
    this.docs = PRICINGS;
    this.qna = QnA;
  }

}
