import { Component, OnInit, Input, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GalleryModel } from '@gallery/gallery.model';

@Component({
  selector: 'ph-spl-gallery-widget',
  templateUrl: './gallery-widget.component.html',
  styles: []
})
export class GalleryWidgetComponent implements OnInit, AfterViewInit {

  @Input() data: GalleryModel;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.data.tags.forEach(tag => {
      this.document.getElementById(`${this.data.name}`).classList.add(tag);
    });
  }

}
