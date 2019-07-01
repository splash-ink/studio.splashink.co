import { Component, Input, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GalleryModel } from '@gallery/gallery.model';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'ph-spl-gallery-widget',
  templateUrl: './gallery-widget.component.html',
  styles: []
})
export class GalleryWidgetComponent implements AfterViewInit {

  @Input() data: GalleryModel;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit() {
    this.data.tags.forEach(tag => {
      this.document.getElementById(`${this.data.id}`).classList.add(tag);
    });
  }

}
