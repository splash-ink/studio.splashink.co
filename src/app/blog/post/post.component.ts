import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FirestoreDataService } from '@core/firestore-data.service';
import { Subscription } from 'rxjs';
import { PostModel } from './post.model';
import { SeoService } from '@core/seo.service';

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
export class PostComponent implements OnInit, AfterViewInit, OnDestroy {

  doc$: PostModel;
  subs: Subscription;
  startWith = '';

  @ViewChild('sec') ref: ElementRef;

  constructor(
    private fds: FirestoreDataService,
    private sanitizer: DomSanitizer,
    private seo: SeoService
  ) { }

  syncBg() {
    return this.sanitizer.bypassSecurityTrustStyle(`
    background-image: url('${this.doc$.thumbnail}');
    visibility: visible;
    animation-name: fadeIn;
    padding: 40px 0;`);
  }

  ngOnInit() {
    this.subs = this.fds.doc$<PostModel>('blog/LYE0cQ2QPfMz3svXiGfW')
    .subscribe(doc => {

      this.seo.generateTags({
        title: `Blog :: ${doc.title}`,
        description: 'Leia o artigo completo clicando na ligação.',
        image: doc.thumbnail,
        slug: `blog/${doc.pid}`
      });

      this.startWith = doc.body.charAt(0);
      doc.body.substring(1);

      this.doc$ = doc;
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
