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
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/disparos-digital-studio.appspot.com/o/Afrikaneeze%2Fafrikaneeze_medium_thumbnail.jpg?alt=media&token=de493ffd-99d9-4383-ab15-298aaecf7bd7',
      photos: []
    };
  }

}
