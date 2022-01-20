import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { SearchComponent } from '../search/search.component';



@Component({
  selector: 'app-search-project-selection',
  templateUrl: './search-project-selection.component.html',
  styleUrls: ['./search-project-selection.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchProjectSelectionComponent implements OnInit {
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
      progressCustomer: 'Before initial report',
      progressAnalysis: 'Before approval of FA report',
      receptionNo: 'S21-0010',
      urgencyReport: 'Normal',
      receptionDate: '2021/06/16',
      customerName: 'ARIMA OPT',
      productCategory: 'MOS',
      productName: 'IMX001AKE-1',
      failureMode: '',
      businessGroup: '',
     
    }]);
  }

  showActions() {
    const popup = this.dialog.open(SearchComponent).componentInstance;
  }

  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];

}
