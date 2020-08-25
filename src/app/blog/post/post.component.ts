import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from './post.model';
import { SeoService } from '@studio/core';
import { ContentfulService } from 'app/core/contentful.service';

@Component({
  selector: 'ds-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  doc$: PostModel;
  subscription: Subscription;
  startWith = '';

  @ViewChild('sec') ref: ElementRef;

  constructor(
    private readonly seo: SeoService,
    private readonly renderer: Renderer2,
    private readonly contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    this.subscription = this.contentfulService.getContent('1Fur4hADPKRZatMXbzHBGY')
    .subscribe((content: PostModel) => {
      const backgroundImage = 'https:' + content.backgroundImage.fields?.file.url;

      this.startWith = content.body.charAt(0);
      this.doc$ = content;

      this.seo.generateTags({
        title: `${content.title} - Blog - Splash Ink Studios`,
        description: 'Leia o artigo completo clicando na ligação.',
        image: backgroundImage,
        slug: `blog/${content.slug}`
      });

      this.renderer
      .setStyle(
        this.ref.nativeElement,
        'background-image',
        `url(${backgroundImage})`
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
