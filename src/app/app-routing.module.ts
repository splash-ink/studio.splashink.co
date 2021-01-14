import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('@studio/blog').then(m => m.BlogModule)
  },
  {
    path: 'galleries',
    loadChildren: () => import('@studio/gallery').then(m => m.GalleryModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('@studio/pricing').then(m => m.PricingModule)
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@studio/onboard').then(m => m.OnboardModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
