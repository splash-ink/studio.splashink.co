import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('⚡ Banner', () => {
    let fixture: ComponentFixture<BannerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(BannerComponent);
    }));

    it('🧪 should create the Widget', () => {
        const widget = fixture.debugElement.componentInstance;
        expect(widget).toBeTruthy();
    });

    it(`🧪 should contain card title as "Nós combinamos design, pensamento e técnica."`, () => {
        fixture.detectChanges();
        const compiledWidget = fixture.nativeElement;
        expect(compiledWidget.querySelector('h1').textContent).toContain('Nós combinamos design, pensamento e  técnica.');
    });

    it('🧪 should contain a anchor to continue read the full article', () => {
        fixture.detectChanges();
        const compiledWidget = fixture.nativeElement;
        expect(compiledWidget.querySelector('a').textContent).toContain('Leia o Artigo Completo');
    });
});
