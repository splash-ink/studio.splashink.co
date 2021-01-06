import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('⚡ Footer', () => {
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
    }));

    it('🧪 should create Footer widget', () => {
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('🧪 should have a copyrigth', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Splash Ink');
    });

    it(`🧪 should contain the "Splash Ink" logo`, () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('img').src).toContain('assets/images/logo.png');
    });

    it(`🧪 should link company addr on Google Map`, () => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.map-link > a')).nativeElement.textContent).toContain('Abrir Localização no Mapa');
        expect(fixture.debugElement.query(By.css('.map-link > a')).nativeElement.href).toContain('https://goo.gl/maps/YQAe6kG9WYRAUh8r8');
    });
});
