import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreDataService } from '@core/firestore-data.service';
import { Subscription } from 'rxjs';
import { PostModel } from './post.model';

@Component({
  selector: 'ph-spl-post',
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
  helper: Subscription;
  /// alias for async fields
  startWith = '';
  constructor(private fds: FirestoreDataService, private sanitizer: DomSanitizer) { }

  syncBg() {
    return this.sanitizer.bypassSecurityTrustStyle(`
    background-image: url('${this.doc$.thumbnail}');
    visibility: visible;
    animation-name: fadeIn;
    padding: 40px 0;`);
  }

  ngOnInit() {
    this.helper = this.fds.doc$<PostModel>('blog/LYE0cQ2QPfMz3svXiGfW')
    .subscribe(payload => {
      this.doc$ = payload;

      this.startWith = this.doc$.body.charAt(0);
      this.doc$.body = this.doc$.body.substring(1);
    });
  }

  ngOnDestroy(): void {
    this.helper.unsubscribe();
  }

}
