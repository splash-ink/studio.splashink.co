import { GalleryModel } from '@gallery/gallery.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreDataService } from '@core/firestore-data.service';

@Component({
  selector: 'ph-spl-filter-widget',
  templateUrl: './filter-widget.component.html',
  styles: [
    `
    .filter-text {
      font-weight: 600;
      font-size: 12px;
      border-bottom: none !important;
    }
    `
  ]
})
export class FilterWidgetComponent implements OnInit {

  docs$: Observable<GalleryModel[]>;
  constructor(private fds: FirestoreDataService) { }

  ngOnInit() {
    this.docs$ = this.fds.col$('galleries');
  }

}
