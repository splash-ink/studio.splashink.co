import { Component, AfterViewInit, Inject } from '@angular/core';
import { PartnerModel } from './partner.model';
import { BACKERS } from './../../data';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ds-partner-widget',
  templateUrl: './partner-widget.component.html',
  styles: []
})
export class PartnerWidgetComponent implements AfterViewInit {

  docs$: PartnerModel [] = BACKERS;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit() {
    this.docs$.forEach(backer => {
      this.document.getElementById(backer.alt).style.backgroundImage = `url('${backer.thumbnail_url}')`;
    });
  }

}
