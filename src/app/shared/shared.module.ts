import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { GalleryComponent } from './gallery/gallery.component';

const utils = [
  MdToHtmlPipe
];

const comps = [
  GalleryComponent
];

const shared = [
  ...utils,
  ...comps,
];
@NgModule({
  declarations: [
    ...shared
  ],
  exports: [
    ...shared
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
