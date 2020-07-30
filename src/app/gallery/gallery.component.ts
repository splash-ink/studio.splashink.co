import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@studio/core';
import * as $ from 'jquery';
import 'magnific-popup';
import { switchMap } from 'rxjs/operators';


@Component({
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit, AfterViewInit {

  private id: string | number;

  constructor(
    private route: ActivatedRoute,
    private readonly seoService: SeoService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.id = params.get('id'))
    );

    this.seoService.generateTags({
      title: `Afrikaneeze - Álbum`,
      description: 'Ajustamos tudo para que minimize seus custos com preços bem definidos e aproveite dos nossos serviços.',
      image: 'https://domain-to-picture.com',
    });
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
