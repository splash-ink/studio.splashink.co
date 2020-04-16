import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from './post.model';
import { SeoService } from '@studio/core';

@Component({
  selector: 'ds-post',
  templateUrl: './post.component.html',
  styles: [
    `
      .post-bg-opacity {
        background-color: rgba(1, 14, 22, 0.8);
      }

      .txt-to-upper-case {
        text-transform: uppercase;
      }
    `
  ]
})
export class PostComponent implements OnInit, OnDestroy {

  doc$: PostModel;
  subs: Subscription;
  startWith = '';

  @ViewChild('sec') ref: ElementRef;

  constructor(
    private readonly seo: SeoService,
    private readonly renderer: Renderer2,
  ) { }

  ngOnInit() {
    // this.subs = this.fds.doc$<PostModel>('blog/LYE0cQ2QPfMz3svXiGfW')
    // .subscribe(doc => {

    //   this.seo.generateTags({
    //     title: `Blog :: ${doc.title}`,
    //     description: 'Leia o artigo completo clicando na ligação.',
    //     image: doc.thumbnail,
    //     slug: `blog/${doc.pid}`
    //   });

    //   this.renderer
    //   .setStyle(
    //     this.ref.nativeElement,
    //     'background-image',
    //     `url('${doc?.thumbnail}')`
    //   );

    //   this.startWith = doc.body.charAt(0);
    //   doc.body.substring(1);

    //   this.doc$ = doc;
    // });
  }

  ngOnDestroy(): void {
    // this.subs.unsubscribe();
  }

}
