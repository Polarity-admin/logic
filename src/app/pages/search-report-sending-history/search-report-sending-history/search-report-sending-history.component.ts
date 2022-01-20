import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-report-sending-history',
  templateUrl: './search-report-sending-history.component.html',
  styleUrls: ['./search-report-sending-history.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchReportSendingHistoryComponent implements OnInit {
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
      deliveryNo: '2112-1588',
      reportNo: '',
      ver: '',
      customerName: 'ARIMA OPT',
      productName: 'IMX001AKE-1',
      answerTimeLimitInitial: '2021/12/09',
      answerTimeLimitFinal: '2021/12/25',
      reportDate: '',
      sentDateTime: '2021/12/06 17:12',
      sender: '',
      customerRepresentative: '',
      
    }]);
  }


  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];

}
