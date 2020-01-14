import { Component, Input } from '@angular/core';
import { PriceModel } from '@pricing/price.model';

@Component({
  selector: 'ds-price-widget',
  templateUrl: './price-widget.component.html',
  styles: []
})
export class PriceWidgetComponent {

  @Input('data') doc: PriceModel;
  constructor() { }

}
