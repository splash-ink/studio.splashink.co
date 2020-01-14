import { GalleryModel } from '@gallery/gallery.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreDataService } from '@core/firestore-data.service';

@Component({
  selector: 'ds-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['filter-widget.component.css']
})
export class FilterWidgetComponent implements OnInit {

  docs$: Observable<GalleryModel[]>;
  constructor(private fds: FirestoreDataService) { }

  ngOnInit() {
    this.docs$ = this.fds.colWithIds$('galleries');
  }

}
