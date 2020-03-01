import { Component } from '@angular/core';

export interface Banner {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'ds-banner-widget',
  templateUrl: './banner-widget.component.html',
  styleUrls: ['./banner-widget.component.css']
})
export class BannerWidgetComponent {

  constructor() { }
}
