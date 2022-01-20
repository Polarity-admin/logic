import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-reception-list',
  templateUrl: './search-reception-list.component.html',
  styleUrls: ['./search-reception-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchReceptionListComponent implements OnInit {
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
      progresscustomer: 'Before initial report',
      progressanalysis: 'Under initial analysis',
      registrationcategory: 'Normal return',
      receptionNo: 'S21-0031',
      urgencyreport: 'Normal',
      processfailure: 'In process',
      customername: 'ARIMA OPT',
      productcategory: 'TUNERx',
      productname: 'IMX001AKE-1',
      returnedqty: '1',
      customerRequestDate: '2021/12/04',
      receptiondate: '2021/12/04',
      tatinitialreport: '2021/12/09',
      tatfinalreport: '2021/12/25',
      customerrepresentative: 'hidenori tanaka',
    }]);
  }

  // showActions() {
  //   const popup = this.dialog.open(SearchComponent).componentInstance;
  // }

  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];

}
