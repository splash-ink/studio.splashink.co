import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardComponent } from './onboard/onboard.component';
import { BannerWidgetComponent } from './onboard/banner-widget/banner-widget.component';
import { GalleyWidgetComponent } from './galley-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    BannerWidgetComponent,
    GalleyWidgetComponent
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
