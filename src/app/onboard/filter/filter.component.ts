import { GalleryModel } from '@gallery/gallery.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreDataService } from '@core/firestore-data.service';

@Component({
  selector: 'ds-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['filter.component.css']
})
export class FilterComponent implements OnInit {

  docs$: Observable<GalleryModel[]>;
  constructor(private fds: FirestoreDataService) { }

  ngOnInit() {
    this.docs$ = this.fds.colWithIds$('galleries');
  }

}
