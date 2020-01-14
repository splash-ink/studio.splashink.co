import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-banner-widget',
  templateUrl: './banner-widget.component.html',
  styleUrls: ['./banner-widget.component.css']
})
export class BannerWidgetComponent implements OnInit {

  title = 'Nós combinamos design, pensamento e\
  técnica.';

  imgUrl = 'assets/images/landing-cover.jpg';

  constructor(private sanitizer: DomSanitizer) { }

  setOnboardImage() {
    if (typeof(this.imgUrl) === undefined) { return; }

    const style = `background-image: url(${this.imgUrl});`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  ngOnInit() {
  }

}
