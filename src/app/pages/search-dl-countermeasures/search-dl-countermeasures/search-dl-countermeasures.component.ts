import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';



@Component({
  selector: 'app-search-dl-countermeasures',
  templateUrl: './search-dl-countermeasures.component.html',
  styleUrls: ['./search-dl-countermeasures.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDlCountermeasuresComponent implements OnInit {
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
      status: 'done',
      actionDatePlan: '2019-11-25',
      outlineOfCorrectiveActions: 'test',
      actionForCustomer: 'test',
      actionNo: 'G01-03',
      whitePixel: 'No',
      ptest: 'Unavailable',
      actiondatedone: '2019/11/26',
      shipmentDate: '2019/11/27',
      lastupdated: 'test    2019/11/20 11:28',
      correctiveactionsmarklotNo: '3333',
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
