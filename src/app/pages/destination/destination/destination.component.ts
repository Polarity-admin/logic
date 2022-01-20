import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as wjNav from '@grapecity/wijmo.nav';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationComponent implements OnInit {
  dropDownData = [

  ];

  constructor() {}

  ngOnInit(): void {

  }
}
