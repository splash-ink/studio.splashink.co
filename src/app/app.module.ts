import { registerLocaleData } from '@angular/common';
import ptAO from '@angular/common/locales/pt-AO';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@studio/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(ptAO);

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule,
    CoreModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-AO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
