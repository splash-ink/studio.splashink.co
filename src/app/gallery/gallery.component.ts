import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'ph-spl-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit, AfterViewInit {

  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.id = params.get('id'))
    );
  }

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
