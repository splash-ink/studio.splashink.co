import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { OnboardComponent } from './onboard.component';
import { BannerWidgetComponent } from './banner-widget/banner-widget.component';

describe('⚡ Onboard Page', () => {
    let fixture: ComponentFixture<OnboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OnboardComponent, BannerWidgetComponent],
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
