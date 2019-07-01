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
      mainClass: 'mfp-with-zoom mfp-img-mobile',
        fixedContentPos: true,
        closeBtnInside: false,
      image: {
        titleSrc: 'title',
        verticalFit: true,
        tError: '<a href="%url%">A imagem</a> não pode ser carregada.'
      },
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function (element) {
            return element.find('img');
        }
      }
    });
  }

}
