import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ph-spl-gallery-widget',
  templateUrl: './gallery-widget.component.html',
  styles: []
})
export class GalleryWidgetComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
