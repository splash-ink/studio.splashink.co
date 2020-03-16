import { Component, Input } from '@angular/core';
import { PriceModel } from '../price.model';

@Component({
  selector: 'ds-price',
  templateUrl: './price.component.html',
  styles: []
})
export class PriceComponent {

  @Input('data') doc: PriceModel;
  constructor() { }

}
