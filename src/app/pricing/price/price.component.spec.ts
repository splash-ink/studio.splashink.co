import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent } from './price.component';

describe('⚡ Price', () => {
  let component: PriceWidgetComponent;
  let fixture: ComponentFixture<PriceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PriceComponent);
  }));

  it('should create', async () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
