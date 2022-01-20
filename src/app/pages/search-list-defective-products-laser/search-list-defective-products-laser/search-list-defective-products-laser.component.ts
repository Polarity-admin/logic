import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-list-defective-products-laser',
  templateUrl: './search-list-defective-products-laser.component.html',
  styleUrls: ['./search-list-defective-products-laser.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchListDefectiveProductsLaserComponent implements OnInit {
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
      receptionNo: 'S21-0026',
      receptionDate: '2021/11/29',
      customerName: 'KT/HCONSU',
      productName: 'MX001AKE-1',
      customerSampleNo: '1',
      sonySampleNo: '1',
      markLotNo: 'test',
      processOfFailure: 'In process',
      failureMode: 'TEST',
      test: 'Unavailable',
      solder: 'No',
      whitePixel: 'No',
      ptest: 'Unavailable',
      requiredreportdateinitial: 'testdata',
      requiredreportdatafinal: 'testdata',
      reportdate: 'testdata',
      reporttat: 'testdata',
      replacement: 'No',
      registrationCategory: 'test',
      lastUpdate: 'test',
      lastUpdateBy: 'test',
    }]);
  }


  testSelect = ['MOS','MS','CIS','CCD','HTPS','SXRD','M-OLED','RCP','EVF','LBP','DVD-P','E.BD再生','E.DB記録','DVD-LC','CD-R','SHP','E.光通信','OTHER','OLED','X-Ray','E.Picoモジュール','E.Pico用レーザ','E.ディスプレイ','E.センサー','E.レベラー','E.Jyutaku(鹿児島)','TUNER','VICSEL','HALOS'];

}
