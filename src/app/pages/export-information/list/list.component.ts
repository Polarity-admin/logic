  import { Component, OnInit, ChangeDetectionStrategy, ViewChild, } from '@angular/core';
  import { CollectionView } from '@grapecity/wijmo';

  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ExportInformationListComponent implements OnInit {
    testData: CollectionView | [];
    currentPage: number = 1;
  
    totalPages: number = 1;
    pages: number[] = [1];
  
    dropDownData1 = ['MS:OK', 'NG', '-MOS:Pass', 'Fail', '-'];
  
    constructor() {}
  
    ngOnInit(): void {
      this.testData = new CollectionView([
         { test: 'test', receptionNo: 'S21-0025' },
         { test: 'test', receptionNo: '' }
      ]);
    }
   
  }
  
  