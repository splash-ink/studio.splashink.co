import { Component, AfterViewInit, Inject } from '@angular/core';
import { PartnerModel } from './partner.model';
import { BACKERS } from '../../data';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ds-partner',
  templateUrl: './partner.component.html',
  styles: []
})
export class PartnerComponent implements AfterViewInit {

  docs$: PartnerModel [] = BACKERS;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit() {
    this.docs$.forEach(backer => {
      this.document.getElementById(backer.alt).style.backgroundImage = `url('${backer.thumbnail_url}')`;
    });
  }

}
