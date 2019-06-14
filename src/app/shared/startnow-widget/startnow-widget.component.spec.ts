import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartnowWidgetComponent } from './startnow-widget.component';

describe('⚡ Startnow Widget', () => {
  let component: StartnowWidgetComponent;
  let fixture: ComponentFixture<StartnowWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartnowWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartnowWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🧪 should create the widget', () => {
    expect(component).toBeTruthy();
  });

  it(`🧪 should contain a quote to start a new project`, () => {
    fixture.detectChanges();
    const compiledWidget = fixture.nativeElement;
    expect(compiledWidget.querySelector('h5').textContent).toContain('Nós gostaríamos de ouvir sobre começar seu novo projeto?');
  });

  it(`🧪 should have an anchor to open modal form`, () => {
    fixture.detectChanges();
    const compiledWidget = fixture.nativeElement;
    expect(compiledWidget.querySelector('a')).toBeTruthy();
  });
});
