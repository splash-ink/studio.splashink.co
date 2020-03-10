import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartnowComponent } from './startnow/startnow.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { QuicklinkModule } from 'ngx-quicklink';

const comps = [
  StartnowComponent,
  MdToHtmlPipe
];

@NgModule({
  declarations: [...comps],
  exports: [...comps, QuicklinkModule],
  imports: [
    QuicklinkModule,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
