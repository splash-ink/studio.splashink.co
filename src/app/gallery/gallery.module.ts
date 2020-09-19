import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { SharedModule } from '@studio/shared';

@NgModule({
  declarations: [GalleryComponent, GalleriesComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule
  ]
})
export class GalleryModule { }
