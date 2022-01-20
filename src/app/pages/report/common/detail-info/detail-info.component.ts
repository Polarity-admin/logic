import {Component, OnInit, ChangeDetectionStrategy, ViewChild, Input,} from '@angular/core';
import * as WijmoCore from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailInfoComponent implements OnInit {
  SampleData: CollectionView | [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.SampleData = new CollectionView([{
      scope: false,
      ver: 'ver2',
      customername: 'test',
      productname: 'IMX001AKE-1',
      reportno: 'S18-0001-H02',
      filename: 'test.pdf',
      password: 'test',
      filesize: '112.68KB',
      sentdate: '2020/07/31 09:41',
    }]);
  }
}
