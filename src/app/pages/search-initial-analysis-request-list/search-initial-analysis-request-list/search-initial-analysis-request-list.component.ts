import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-initial-analysis-request-list',
  templateUrl: './search-initial-analysis-request-list.component.html',
  styleUrls: ['./search-initial-analysis-request-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInitialAnalysisRequestListComponent implements OnInit {
  @ViewChild('returnedSamplesGrid', { static: true }) returnedSamplesGrid: FlexGrid;
  @ViewChild('workFlowGrid', { static: true }) workFlowGrid: FlexGrid;

  workFlowData: CollectionView | [];
  SampleData: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [

  ];

  constructor(private dialog: MatDialog) { }

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
      status: 'preparing the reply',
      requestNo: 'S21-0031-F01',
      ver: 'Ver.1 (Initial)',
      receptionNo: 'S21-0031',
      receptionDate: '2021/12/04',
      customerName: 'ARIMA OPT',
      productName: 'IMX001AKE-1',
      numberofanalysisrequest: '1',
      requestedby: 'hidenori tanaka',
      requestedsection: 'factory business system management section hidenori tanaka',
      personincharge: 'testdata',
      requestdate: '2021/12/04 11:50',
      requiredReportDateinitial: '-',
      requiredReportDatefinal: '2021/12/04',
      reportDate: 'testdata',
      reportTat: 'testdata',
      remarks: 'testdata',
    }]);
  }


  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];

}
