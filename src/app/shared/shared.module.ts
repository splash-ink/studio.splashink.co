import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartnowWidgetComponent } from './startnow-widget/startnow-widget.component';

const comps = [
  StartnowWidgetComponent
];

@NgModule({
  declarations: [comps],
  exports: [comps],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
