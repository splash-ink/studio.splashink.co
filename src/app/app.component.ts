import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit(): void {
      const c = this.document.body.classList.contains('left-nav-sidebar');

      if (!c) {
        this.document.body.classList.add('left-nav-sidebar');
      }
    }
}
