import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { By } from '@angular/platform-browser';
import { NavComponent } from '@core/nav/nav.component';
import { FooterComponent } from '@core/footer/footer.component';

describe('⚡ Main Application', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));

  it('🧪 should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('🧪 should have a navbar', () => {
    fixture.detectChanges();
    const navEl = fixture.debugElement.queryAll(By.directive(NavComponent));
    expect(navEl).toBeTruthy();
  });

  it('🧪 should have a footer', () => {
    fixture.detectChanges();
    const footerEl = fixture.debugElement.queryAll(By.directive(FooterComponent));
    expect(footerEl).toBeTruthy();
  });
});
