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
  SamplesData: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [

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
      customername: 'test',
      name: 'E_ASI03',
      email: 'test',
    }]);
  }
}
