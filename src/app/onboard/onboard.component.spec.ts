import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { OnboardComponent } from './onboard.component';
import { BannerWidgetComponent } from './banner-widget/banner-widget.component';
import { PartnerWidgetComponent } from './partner-widget/partner-widget.component';
import { FilterWidgetComponent } from './filter-widget/filter-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('⚡ Onboard Page', () => {
    let fixture: ComponentFixture<OnboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                OnboardComponent,
                BannerWidgetComponent,
                FilterWidgetComponent,
                PartnerWidgetComponent
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
        const bannerEl = fixture.debugElement.queryAll(By.directive(BannerWidgetComponent));
        expect(bannerEl).toBeTruthy();
    });
});
