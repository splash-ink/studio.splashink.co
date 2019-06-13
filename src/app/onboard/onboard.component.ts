import { PartnerModel } from './partners-widget/partner.model';
import { BACKERS } from './../data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ph-spl-onboard',
  templateUrl: './onboard.component.html',
})
export class OnboardComponent implements OnInit {

  backers: PartnerModel [] = BACKERS;
  constructor() {}

  ngOnInit() {
  }

}
