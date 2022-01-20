import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as wjNav from '@grapecity/wijmo.nav';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckingComponent implements OnInit {
  dropDownData = [

  ];

  constructor() {}

  ngOnInit(): void {

  }
}
