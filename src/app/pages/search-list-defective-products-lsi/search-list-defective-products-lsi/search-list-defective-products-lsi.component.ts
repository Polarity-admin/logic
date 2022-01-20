import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-list-defective-products-lsi',
  templateUrl: './search-list-defective-products-lsi.component.html',
  styleUrls: ['./search-list-defective-products-lsi.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchListDefectiveProductsLsiComponent implements OnInit {
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
      receptionNo: 'S21-0031',
      receptionDate: '2021/12/04',
      customerName: 'ARIMA OPT',
      receptiondate: '2021/08/10',
      productname: 'IMX001AKE-1',
      category: 'LSI',
      productCategory1: 'TUNER',
      customerSampleNo: '',
      sonySampleNo: '1',
      processOfFailure: 'In process',
 
    }]);
  }


  testSelect = ['Plan temporary saved', 'Under plan approving', 'Under plan confirming', 'Comment inputting', 'Under reception'];

}
