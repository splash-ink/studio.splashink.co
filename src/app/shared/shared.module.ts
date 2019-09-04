import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartnowWidgetComponent } from './startnow-widget/startnow-widget.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { QuicklinkModule } from 'ngx-quicklink';

const comps = [
  StartnowWidgetComponent,
  MdToHtmlPipe
];

@NgModule({
  declarations: [comps],
  exports: [comps, QuicklinkModule],
  imports: [
    QuicklinkModule,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
