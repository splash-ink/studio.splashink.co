import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { FormValidationService } from './services/form-validation.service';

const utils = [
  MdToHtmlPipe
];

const svc = [
  FormValidationService
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
  providers: [
    ...svc
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
