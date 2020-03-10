import { Component, Inject, Input, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AccordionModel } from './accordion.model';

@Component({
  selector: 'ds-accordion',
  templateUrl: './accordion.component.html',
  styles: []
})
export class AccordionComponent implements AfterViewInit {

  @Input('data') doc: AccordionModel;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  togglePanel() {
    const el = this.document.getElementById(`${this.doc.key}`);
    const i = this.document.getElementById(`icon-btn-${this.doc.key}`);

    el.classList.toggle('in');
    el.classList.toggle('show');

    i.classList.toggle('ti-minus');
    i.classList.toggle('ti-plus');

  }

  ngAfterViewInit() {
    const e = this.document.getElementById(`icon-btn-${this.doc.key}`).classList;
    this.doc.state === true ? e.add('ti-minus') : e.add('ti-plus');
  }

}
