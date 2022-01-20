import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-list-survey-requests',
  templateUrl: './search-list-survey-requests.component.html',
  styleUrls: ['./search-list-survey-requests.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchListSurveyRequestsComponent implements OnInit {
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
      requestNo: 'S21-0019-F01',
      ver: 'Ver.1 (Initial)',
      receptionNo: 'S21-0019',
      receptionDate: '2021/08/10',
      customerName: 'ARIMA OPT22',
      productName: 'IMX001AKE-1',
      numberOfAnalysisRequest: '0',
      requestedBy: 'hidenori tanaka',
      requester: 'hideaki wakasugi',
      sampleNo: '1',
      requestedSection: 'testdata',
      personInCharge: 'testdata',
      requestDate: '2021/0922 15:52',
      requiredReportDateInitial: 'testdata',
      requiredReportDataFinal: 'testdata',
      reportDate: 'testdata',
      reportTat: 'testdata',
      remarks: 'testdata',
    }]);
  }


  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];

}
