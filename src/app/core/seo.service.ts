import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { isEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta,
     private title: Title,
      @Inject(DOCUMENT) private document: Document) { }

  generateTags(config) {
    config = {
      title: 'Splash Ink :: Estúdio Digital',
      description: 'Put your site description here.',
      image: 'https://domain-to-picture.com',
      slug: '',
      ...config
    };

    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@splashink_' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'splashink' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://studio.splashink.co/${config.slug}` });

  }

  updateCanonicalTag(slug) {
    if (typeof slug !== 'string' || slug === undefined) {
      return;
    }

    this.document

    .querySelector('#canonical')
    .setAttribute('href', `https://www.studio.splashink.co/${slug}`);
  }
}
