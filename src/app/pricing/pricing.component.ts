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
      title: 'Preçários',
      description: 'Preços simples e previsíveis em todos os pacotes fotográficos. Veja a nossa tabela comparativa para fotografia em grupo, individual, artística e muito mais.',
      slug: 'pricing'
    });

    this.pricingPlans$ = PRICINGS;
    this.questionAndAsks$ = QnA;
  }

}
