import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWidgetComponent } from './partner-widget.component';

describe('PartnerWidgetComponent', () => {
  let component: PartnerWidgetComponent;
  let fixture: ComponentFixture<PartnerWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
