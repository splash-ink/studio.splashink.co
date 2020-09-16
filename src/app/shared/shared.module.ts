import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { FormValidationService } from './services/form-validation.service';
import { TagsFilterComponent } from './tags-filter/tags-filter.component';

const utils = [
  MdToHtmlPipe
];

const svc = [
  FormValidationService
];

const comps = [
  GalleryComponent,
  TagsFilterComponent
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
