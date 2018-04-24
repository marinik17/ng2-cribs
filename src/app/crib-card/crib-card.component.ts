import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  constructor() { }

  @Input('crib') crib: any;

  ngOnInit() {
  }

}
