import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWidgetComponent } from './price-widget.component';

describe('⚡ Price Widget', () => {
  let component: PriceWidgetComponent;
  let fixture: ComponentFixture<PriceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceWidgetComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PriceWidgetComponent);
  }));

  it('should create', async () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
