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


class CustomMergeManager extends wjGrid.MergeManager {
  getMergedRange(panel: wjGrid.GridPanel, r: number, c: number, clip: boolean = true) {
    var rng = new wjGrid.CellRange(r, c);
    if (panel.cellType == wjGrid.CellType.ColumnHeader || panel.cellType == wjGrid.CellType.TopLeft) {
      // create basic cell range

      // expand up/down
      for (var i = rng.row; i < panel.rows.length - 1; i++) {
        if (panel.getCellData(i, rng.col, true) != panel.getCellData(i + 1, rng.col, true))
          break;
        rng.row2 = i + 1;
      }
      for (var i = rng.row; i > 0; i--) {
        if (panel.getCellData(i, rng.col, true) != panel.getCellData(i - 1, rng.col, true))
          break;
        rng.row = i - 1;
      }
      
    }

    return rng;
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  @ViewChild('returnedSamplesGrid', { static: true}) returnedSamplesGrid: FlexGrid;
  @ViewChild('workFlowGrid', { static: true}) workFlowGrid: FlexGrid;

  workFlowData: CollectionView | [];
  SampleData: CollectionView | [];
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
    
    this.SampleData = new CollectionView([{
      scope: false,
      status: 'Before approval',
      requestno: 'S21-0019-F01',
      ver: 'Ver.1 (Initial)',
      receptionno: 'S21-0019',
      receptiondate: '2021/08/10',
      customername: 'ARIMA OPT22',
      productname: 'IMX001AKE-1',
      numberofanalysisrequest: '0',
      requestedby: 'hidenori tanaka',
      requestedsection: 'testdata',
      personincharge: 'testdata',
      requestdate: '2021/0922 15:52',
      requiredreportdateinitial: 'testdata',
      requiredreportdatafinal: 'testdata',
      reportdate: 'testdata',
      reporttat: 'testdata',
      sampleno: 'testdata',
      investigationcategory: 'testdata',
      investigationresult: 'testdata',
    }]);
  }

  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];


}