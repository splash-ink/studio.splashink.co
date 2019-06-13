import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardComponent } from './onboard/onboard.component';
import { BannerWidgetComponent } from './onboard/banner-widget/banner-widget.component';
import { GalleryWidgetComponent } from './onboard/gallery-widget/gallery-widget.component';
import { FilterWidgetComponent } from './onboard/filter-widget/filter-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    BannerWidgetComponent,
    GalleryWidgetComponent,
    FilterWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
