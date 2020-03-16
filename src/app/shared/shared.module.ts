import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartnowComponent } from './startnow/startnow.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

const comps = [
  StartnowComponent,
  MdToHtmlPipe
];

@NgModule({
  declarations: [...comps],
  exports: [...comps],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
