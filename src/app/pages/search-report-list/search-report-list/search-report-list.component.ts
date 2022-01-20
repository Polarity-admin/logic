import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-report-list',
  templateUrl: './search-report-list.component.html',
  styleUrls: ['./search-report-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchReportListComponent implements OnInit {
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
      status: 'In the make',
      reportNo: 'S21-0019-F01',
      ver: 'Ver.1 (Initial)',
      receptionNo: 'S21-0019',
      receptionDate: '2021/08/10',
      customerName: 'ARIMA OPT22',
      productName: 'IMX001AKE-1',
      urgencyOfReport: 'Normal',
      requestedby: 'hidenori tanaka',
      requestedsection: 'testdata',
      preparedBy: 'testdata',
      requestdate: '2021/0922 15:52',
      answerTimeLimitInitial: '2021/06/22',
      answerTimeLimitFinal: '2021/07/07',
      reportDate: 'testdata',
    }]);
  }


  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];

}
