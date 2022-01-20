import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as wjNav from '@grapecity/wijmo.nav';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent implements OnInit {
  dropDownData = [

  ];

  constructor() {}

  ngOnInit(): void {

  }
}
