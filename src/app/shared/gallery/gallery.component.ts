import { Component, Input, OnInit } from '@angular/core';
import { GalleryModel } from '@studio/gallery';

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

  @Input('gallery') gallery?: GalleryModel;

  constructor() { }

  ngOnInit() {
    this.gallery = this.gallery || {
      id: 'afrikaneeze-19',
      name: 'Afrikaneeze',
      description: 'Lorem ipsun, dolor sept unger ol demnget.',
      tags: ['photography', 'yearly-event'],
      thumbnail: 'https://imageipsum.com/680x800',
      photos: []
    };
  }

}
