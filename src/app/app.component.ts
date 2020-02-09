import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SeoService } from '@core/seo.service';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
      @Inject(DOCUMENT) private document: Document,
      private readonly seo: SeoService
    ) {
      this.seo.startRouteListener();
      this.initApp();
    }

    private initApp() {
      const className = 'left-nav-sidebar';
      const query = this.document.body.classList.contains(className);

      if (!query) {
        this.document.body.classList.add(className);
      }
    }
}
