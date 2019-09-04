import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('@blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('@gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('@pricing/pricing.module').then(m => m.PricingModule)
  },
  { path: '', component: OnboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
