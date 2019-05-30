import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ph-spl-banner-widget',
  templateUrl: './banner-widget.component.html',
  styles: ['.onBoardSection { background-position: 0px 0px; visibility: visible; animation-name: fadeIn; }']
})
export class BannerWidgetComponent implements OnInit {

  title = 'Nós combinamos design, pensamento e\
  técnica.';

  body = 'We are a full-service digital agency. Everything you could possibly want it to do and not only that,\
  beautifully carefully designed.';

  imgUrl = 'https://www.themezaa.com/html/pofo/images/slider-01.jpg';

  constructor(private sanitizer: DomSanitizer) { }

  getWCBg() {
    const style = `background-image: url(${this.imgUrl});`;

    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  ngOnInit() {
  }

}
