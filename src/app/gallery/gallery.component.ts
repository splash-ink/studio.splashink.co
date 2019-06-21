import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';


@Component({
  selector: 'ph-spl-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('.image-link').magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      image: {
        titleSrc: 'title',
        verticalFit: true,
        tError: '<a href="%url%">A imagem</a> não pode ser carregada.'
      },
      gallery: {
        enabled: true,
      }
    });
  }

}
