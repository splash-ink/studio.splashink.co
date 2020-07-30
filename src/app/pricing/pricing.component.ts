import { Component, OnInit } from '@angular/core';
import { SeoService } from '@studio/core';
import { PRICINGS, QnA } from 'app/data';
import { AccordionModel } from './accordion/accordion.model';
import { PriceModel } from './price.model';

@Component({
  templateUrl: './pricing.component.html',
})
export class PricingComponent implements OnInit {

  pricingPlans$: PriceModel [];
  questionAndAsks$: AccordionModel [];

  constructor(private readonly seoService: SeoService) {}

  ngOnInit() {
    this.seoService.generateTags({
      title: 'Preçários - Q&A',
      description: 'Ajustamos tudo para que minimize seus custos com preços bem definidos e aproveite dos nossos serviços.',
      image: 'https://domain-to-picture.com',
      slug: 'pricing'
    });

    this.pricingPlans$ = PRICINGS;
    this.questionAndAsks$ = QnA;
  }

}
