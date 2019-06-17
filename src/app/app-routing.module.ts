import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('@blog/blog.module').then(m => m.BlogModule)
  },
  { path: '', component: OnboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
