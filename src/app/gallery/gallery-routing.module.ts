import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleriesComponent } from './galleries/galleries.component';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: ':id/:name',
    component: GalleryComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: GalleriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
