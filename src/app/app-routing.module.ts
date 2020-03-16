import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('@studio/blog').then(m => m.BlogModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('@studio/gallery').then(m => m.GalleryModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('@studio/pricing').then(m => m.PricingModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: OnboardComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
