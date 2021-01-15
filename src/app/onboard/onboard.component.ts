import { Component, OnInit } from '@angular/core';
import { SeoService } from '@studio/core';

@Component({
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  constructor(private readonly seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.generateTags({});
  }

}
