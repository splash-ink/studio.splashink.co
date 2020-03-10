import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardComponent } from './onboard/onboard.component';
import { BannerComponent } from './onboard/banner/banner.component';
import { GalleryComponent } from './onboard/gallery/gallery.component';
import { FilterComponent } from './onboard/filter/filter.component';
import { PartnerComponent } from './onboard/partner/partner.component';
import { SharedModule } from '@shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    BannerComponent,
    GalleryComponent,
    FilterComponent,
    PartnerComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
