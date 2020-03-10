import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

export interface Banner {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'ds-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {

  @ViewChild('sec') ref: ElementRef;

  banner: Banner = {
    title: 'Nós combinamos design, pensamento e técnica.',
    imageUrl: 'assets/images/landing-cover.jpg'
  };

  constructor(private readonly renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.ref.nativeElement,
      'background-image',
      `url('${this.banner?.imageUrl}')`
    );
  }
}
