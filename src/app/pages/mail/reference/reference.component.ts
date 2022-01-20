import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent implements OnInit {
  @ViewChild('workFlowGrid', { static: true }) grid: wjGrid.FlexGrid;
  testData = [
    {
      title: 'analysis report',
      data: [
        { ver: 'ver4', customername: 'DAMMY SHORT EN', productname: 'C8492', reportno: 'K19-9008-H04', filename: 'K19-9008-H04.pdf', password: 'NswQDgNn', filesize: '8.32KB' },
        { password: 'Total', filesize: '8.32KB'},
      ],
    },
  ];
  SampleAttachment: CollectionView | [];
  testSelect = ['Test 1'];

  constructor() {}

  ngOnInit(): void {

    this.SampleAttachment = new CollectionView([{
      filename: 'tmp1.txt',
      filesize: '6Bytes',
      uploadeddateandtime: '2021/12/06 17:12',
    }]);

  }

  onInitialized(grid: wjGrid.FlexGrid) {
  
  }
}