import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, FooterComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
