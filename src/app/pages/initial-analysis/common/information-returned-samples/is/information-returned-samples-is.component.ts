import { 
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

// WIJMO MULTIROW
import { CollectionView } from '@grapecity/wijmo';
import * as wjMultirow from '@grapecity/wijmo.grid.multirow';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';


@Component({
  selector: 'app-information-returned-samples-is',
  templateUrl: './information-returned-samples-is.component.html',
  styleUrls: ['./information-returned-samples-is.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationReturnedSamplesIsComponent implements OnInit {
  @Input() currentRoute: string = null;
  @Input()  countRecord = [
    '1-3'];
    
  @Input() sampleLayDef = [
    {
      cells: [{ binding: 'No', width: 80 }],
    },
    {
      colspan: 2,
      cells: [
        { binding: '商品名', colspan: 2 },
        { binding: '分類名' },
        { binding: '顧客名' },
      ],
    },
    {
      cells: [
        { binding: '数量', width: 100 },
        { binding: '金額', format: 'c' },
      ],
    },
    {
      cells: [{ binding: '受注日', width: 120 }, { binding: '値引' }],
    },
  ];
  currentPage: number = 3;
  totalPages: number = 1;
  pages: number[] = [1]

  returnedSamplesData: CollectionView | [];
  public href: string ="";
  
  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.href = this.router.url
    this.currentRoute = this.href.split('/').pop();

    this.returnedSamplesData = new CollectionView([{
      scope: false,
      requestBy: false,
      receptionNo: 'test',
      receptionDate: 'test',
      customerName: 'test',
      productName: 'test',
      customerSampleNo: 'test',
      sonySampleNo: 'test',
      markLotNo: 'test',
      id: 'test',
      dateOfFailureOccurence: 'test',
      regionOfFailure: 'test',
      processOfFailure: 'test',
      detailProcessOfFailure: 'test',
      failureMode: 'test',
      detailsOfFailureMode: 'test',
    
      whitePixel: 'test',
      test: 'test',
      solder: 'test',

      preCheck: '',
      illustration:  'test',
      replacement: 'test',
      visualCheck: 'test',
      resultOfVisualCheck: 'test',
      personInCharge: 'test',
      comments: 'test',
      preCheckIllustration: 'test',

      mCheck: '',
      result: 'test', 
      mPersonInCharge: 'test',
      equipment: 'test',
      testFile: 'test',
      mIllustration:'',
      m1Time: 'test',
      mNgItem1: 'test',
      mLevel1: 'test',
      mAddress1: 'test',
      m2Time: 'test',
      mNgItem2: 'test',
      mLevel2: 'test',
      mAddress2: 'test',
      m3Time: 'test',
      mNgItem3: 'test', 
      mLevel3: 'test', 
      mAddress3: 'test',

      cCheck: '',
      cTestDate: 'test',
      cResult: 'test',
      cPersonInCharge: 'test',
      cEquipmentNo: 'test',
      cTestFile: 'test',
      c1Time: 'test',
      cNgItem1: 'test',
      cLevel1: 'test',
      cAddress1: 'test',
      c2Time: 'test',
      cNgItem2: 'test',
      cLevel2: 'test',
      cAddress2: 'test',
      c3Time: 'test',
      cNgItem3: 'test', 
      cLevel3: 'test', 
      cAddress3: 'test',

      sCheck: '',
      sTestDate: 'test',
      sResult: 'test',
      sPersonInCharge: 'test',
      sEquipmentNo: 'test',
      sTestFile: 'test',
      s1Time: 'test',
      sNgItem1: 'test',
      sLevel1: 'test',
      sAddress1: 'test',
      s2Time: 'test',
      sNgItem2: 'test',
      sLevel2: 'test',
      sAddress2: 'test',
      s3Time: 'test',
      sNgItem3: 'test', 
      sLevel3: 'test', 
      sAddress3: 'test',

      finalCheck: '',
      analysisResult: '',
      detailsOfAnalysisResult: '',
      responsibility: '',
      summaryOfResult: '',
      comments1: '',
      judgement: ''

    }]);

  
  }

}

export class AppModule {
}
