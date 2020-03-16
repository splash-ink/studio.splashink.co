import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdToHtmlPipe } from './md-to-html.pipe';

const utils = [
  MdToHtmlPipe
];

@NgModule({
  declarations: [...utils],
  exports: [...utils],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
