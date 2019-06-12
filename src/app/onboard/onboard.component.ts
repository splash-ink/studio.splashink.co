import { Component, OnInit } from '@angular/core';
import { Galleries } from '../data';

@Component({
  selector: 'ph-spl-onboard',
  templateUrl: './onboard.component.html',
})
export class OnboardComponent implements OnInit {

  data = Galleries;
  ngOnInit() {
  }

}
