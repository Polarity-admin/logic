import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
} from '@angular/core';
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
  workFlowData: CollectionView | [];
  returnedSamplesData: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [
    'Request for characterization',
    'Request for structural analysis',
    'Failure investigation request 1',
    'Failure investigation request 2',
    '8D report request',
    'Request for measurement survey',
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.workFlowData = new CollectionView([{
      step: 'test',
      name: 'test',
      sectionName: 'test',
      completionDate: 'test',
      result: 'test',
      comments: 'test'
    }]);
    
    this.returnedSamplesData = new CollectionView([{
      scope: false,
      ver: 'ver4',
      customername: 'DAMMY SHORT EN',
      productname: 'C8492',
      reportno: 'K19-9008-H04',
      filename: 'K19-9008-H04.pdf',
      password: 'NswQDgnNn',
      filesize: '8.32KB',
    }]);
  }
}
