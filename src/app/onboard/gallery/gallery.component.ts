import { Component, Input, OnInit } from '@angular/core';
import { GalleryModel } from '@gallery/gallery.model';

@Component({
  selector: 'ds-gallery',
  templateUrl: './gallery.component.html',
  styles: [`
    .gallery-item {
      visibility: visible;
      animation-name: fadeInUp;
      display: inline-block;
    }
  `]
})
export class GalleryComponent implements OnInit {

  @Input() data: GalleryModel;
  constructor() { }

  ngOnInit() {}

}
