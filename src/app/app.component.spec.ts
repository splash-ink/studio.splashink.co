import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule, FooterComponent, NavComponent } from '@studio/core';
import { AppComponent } from './app.component';

describe('⚡ Main Application', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(waitForAsync(() => {
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
