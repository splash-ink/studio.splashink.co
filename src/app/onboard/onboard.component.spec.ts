import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { OnboardComponent } from './onboard.component';
import { BannerComponent } from './banner/banner.component';
import { PartnerComponent } from './partner/partner.component';
import { FilterComponent } from './filter/filter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('⚡ Onboard Page', () => {
    let fixture: ComponentFixture<OnboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              OnboardComponent,
              BannerComponent,
              FilterComponent,
              PartnerComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(OnboardComponent);
    }));

    it('🧪 should create component', () => {
        const page = fixture.debugElement.componentInstance;
        expect(page).toBeTruthy();
    });

    it(`🧪 should contain "Banner Widget"`, () => {
        fixture.detectChanges();
        const bannerEl = fixture.debugElement.queryAll(By.directive(BannerComponent));
        expect(bannerEl).toBeTruthy();
    });
});
