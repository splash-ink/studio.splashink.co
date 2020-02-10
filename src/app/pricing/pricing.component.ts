import { Component, OnInit } from '@angular/core';
import { PriceModel } from './price.model';
import { PRICINGS, QnA } from 'app/data';
import { AccordionModel } from './accordion-widget/accordion.model';
import { SeoService } from '@core/seo.service';

@Component({
  templateUrl: './pricing.component.html',
  styles: []
})
export class PricingComponent implements OnInit {

  docs: PriceModel [];
  qna: AccordionModel [];

  constructor(private readonly seo: SeoService) {
    this.seo.generateTags({
      title: 'Preçários - Q&A',
      description: 'Ajustamos tudo para que minimize seus custos com preços bem definidos e aproveite dos nossos serviços.',
      image: 'https://domain-to-picture.com',
      slug: 'pricing'
    });
  }

  ngOnInit() {
    this.docs = PRICINGS;
    this.qna = QnA;
  }

}
