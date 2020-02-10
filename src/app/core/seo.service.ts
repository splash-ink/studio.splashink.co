import { Injectable, Inject, RendererFactory2, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export declare type LinkDefinition = {
  charset?: string;
  crossorigin?: string;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  rev?: string;
  sizes?: string;
  target?: string;
  type?: string;
} &
{
  [prop: string]: string;
};
@Injectable({
  providedIn: 'root'
})
export class SeoService implements OnDestroy {

  private routeListener: Subscription;

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router,
  ) { }

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

  startRouteListener(): void {
    this.routeListener = this.router

    .events
    .pipe (filter(event => event instanceof NavigationEnd))
    .subscribe(
      () => {
        let url = '';
        const urlTree = this.router.parseUrl(this.router.url);

        if (urlTree.root.hasChildren()) {
          const segments = urlTree.root.children['primary'].segments;

          if (segments && segments.length > 0) {
            url = segments.map(segment => segment.path).join('/');
          }
        }

        this.updateTag({
          rel: 'canonical',
          href: `/${url}`
        });
      }
    );
  }

  updateTag(tag: LinkDefinition): void {
    const selector = this._parseSelector(tag);
    const linkElement = <HTMLLinkElement> this.document.head.querySelector(selector)
      || this.document.head.appendChild(this.document.createElement('link'));

    if (linkElement) {
      Object.keys(tag).forEach((prop: string) => {
        linkElement[prop] = tag[prop];
      });
    }
  }

  private _parseSelector(tag: LinkDefinition): string {
    const attr: string = tag.rel ? 'rel' : 'hreflang';
    return `link[${attr}="${tag[attr]}"]`;
  }

  ngOnDestroy(): void {
    this.routeListener.unsubscribe();
  }
}
