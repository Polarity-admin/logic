import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as wjNav from '@grapecity/wijmo.nav';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent implements OnInit {
  dropDownData = [

  ];

  constructor() {}

  ngOnInit(): void {

  }
}
