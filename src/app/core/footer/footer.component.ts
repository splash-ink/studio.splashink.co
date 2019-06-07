import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ph-spl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
