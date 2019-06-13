import { Component, OnInit } from '@angular/core';
import { GALLERIES } from '../../data';

@Component({
  selector: 'ph-spl-filter-widget',
  templateUrl: './filter-widget.component.html',
  styles: [
    `
    .filter-text {
      font-weight: 600;
      font-size: 12px;
      border-bottom: none !important;
    }
    `
  ]
})
export class FilterWidgetComponent implements OnInit {

  galleries = GALLERIES;
  constructor() { }

  ngOnInit() {
  }

}
