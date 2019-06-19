import { Component, Inject, Input, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AccordionModel } from './accordion.model';

@Component({
  selector: 'ph-spl-accordion-widget',
  templateUrl: './accordion-widget.component.html',
  styles: []
})
export class AccordionWidgetComponent implements AfterViewInit {

  @Input('data') doc: AccordionModel;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  togglePanel() {
    const el = this.document.getElementById(`${this.doc.key}`);
    const i = this.document.getElementById(`icon-btn-${this.doc.key}`);

    if ((el.classList.contains('in') && el.classList.contains('show') && i.classList.contains('ti-minus'))) {
      el.classList.remove('in', 'show');
      i.classList.remove('ti-minus');
      i.classList.add('ti-plus');
    } else {
      el.classList.add('in', 'show');
      i.classList.add('ti-minus');
      i.classList.remove('ti-plus');
    }

  }

  ngAfterViewInit() {
    const e = this.document.getElementById(`icon-btn-${this.doc.key}`).classList;
    this.doc.state === true ? e.add('ti-minus') : e.add('ti-plus');
  }

}
