import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@studio/shared';
import { BannerComponent } from './banner/banner.component';
import { OnboardRoutingModule } from './onboard-routing.module';
import { OnboardComponent } from './onboard.component';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [
    BannerComponent,
    PartnerComponent,
    OnboardComponent,
  ],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    SharedModule,
  ]
})
export class OnboardModule {}
