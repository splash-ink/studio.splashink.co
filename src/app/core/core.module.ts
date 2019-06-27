import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { FooterComponent } from './footer/footer.component';
import { FirestoreDataService } from './firestore-data.service';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavComponent, FooterComponent],
  providers: [FirestoreDataService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
