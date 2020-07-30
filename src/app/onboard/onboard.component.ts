import { Component, OnInit } from '@angular/core';
import { SeoService } from '@studio/core';

@Component({
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  constructor(private readonly seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.generateTags({
      title: 'Splash Ink - Estúdio Digital',
      description: 'Ajustamos tudo para que minimize seus custos com preços bem definidos e aproveite dos nossos serviços.',
      image: 'https://domain-to-picture.com',
    });
  }

}
