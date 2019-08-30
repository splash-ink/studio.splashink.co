import { Component, Input, OnInit } from '@angular/core';
import { GalleryModel } from '@gallery/gallery.model';

@Component({
  selector: 'ph-spl-gallery-widget',
  templateUrl: './gallery-widget.component.html',
  styles: [`
    .gallery-item {
      visibility: visible;
      animation-name: fadeInUp;
      /* position: absolute; */
      /* left: 0%; */
      /* top: 0px; */
    }

    .gallery-item {
      display: inline-block;
    }
  `]
})
export class GalleryWidgetComponent implements OnInit {

  @Input() data: GalleryModel;
  constructor() { }

  ngOnInit() {}

}
