import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-information-returned-samples',
  templateUrl: './information-returned-samples.component.html',
  styleUrls: ['./information-returned-samples.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationReturnedSamplesComponent implements OnInit {
  @Input() currentRoute: string = null;
  @Input() countRecord = ['1-3'];
  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [1];
  irsModeStatus: any ="Module Soc"
  irsMode : any = ['PKG Soc', 'Module Soc'];
  workFlowData: CollectionView | [];
  returnedSamplesData: CollectionView | [];
  returnedSamplesData1: CollectionView | [];
  headerLayout = [];
  public href: string = '';

  montext : string = null;
  comboBox = ['No', 'Yes'];
  comboBox1 = ['-'];

  dropDownData = [
    'Option 1', 
    'Option 2'
  ];

  dropDownData1 = [
    'MS:OK', 
    'NG', 
    '-MOS:Pass', 
    'Fail', 
    '-'
  ];

  dropDownData2 = [
    'MS:OK',
    'NG',
    '-MOS: Reproduction',
    'Non-Reproduction',
    '-',
  ];
  dropDownData3 = [
    'Irregular reproduction',
    'Malfunction IC',
    'Test problem',
    'Other',
  ];
  dropDownData4 = [
    'Fracture', 
    'Wf factor', 
    'Assy factor', 
    'Unknown', 
    'Other'
  ];

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();

    this.returnedSamplesData1 = new CollectionView([
      {
        reception:"S21-0025",
        receptionDate: "2021/11/19",
        customerName: "ARIMA OPT22",
        productName: "MIC-2L-3-Duke2",
        custSampleNo:"", 
        sonySampleNo:"1",
        markLotNo: "",
        panelChipId:"",
        failureOfOccurence: "", 
        regionOfFailure: "",
        processOfFailure: "In process",
        detailProcessOfFailure: "",
        failureMode: "TEST",
        failureModeDetails:"",
        PkgSoc: {
          pTest: "Unavailable",
          pSoldier:"No",
          pFailureMode: "",
          pWhitePixel: "No", 
          pIllustration: "", 
          pReplacement: "No", 
          vcVisualCheckresult: "", 
          vcPersonInCharge:"", 
          vcIllustration:"",
          mcResult:"", 
          mcPersonInCharge:"", 
          mcEquipment: "", 
          mcIllustration: "", 
          cTestDate: "", 
          cResult: "",
          cNgItem1: "",
          cNgItem2: "",
          cNgItem3: "",
          cPersonInCharge: "",
          cEquipmentNo: "",
          cLevel1: "",
          cLevel2: "",
          cLevel3: "",
          cTestFile: "",
          cAddress1: "",
          cAddress2: "",
          cAddress3: "",

          sCheck:"",
          sTestDate: "",
          sResult: "",
          s1Time: "",
          sNgItem1: "",
          s2Time: "",
          sNgItem2: "",
          s3Time: "",
          sNgItem3: "",
          sPersonInCharge: "",
          sEquipmentNo: "",
          sLevel1: "",
          sLevel2: "",
          sLevel3: "",
          sTestFile: "",
          sAddress1: "",
          sAddress2: "",
          sAddress3: "",
        }, 
        ModulesSoc: {
          
        }
        
      }
    ])

    this.returnedSamplesData = new CollectionView([
      {
        scope: false,
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

        tester: 'test',
        customersSet: 'test',
        evaluationBoard: 'test',
        detailsOfAnalysisResult: 'test',
        judgement: 'test',
      },
    ]);

    this.translate.onLangChange.subscribe(() => {
      this.getHeaderLayout();
    });
  }

  formatItem(s: wjGrid.FlexGrid, e: wjGrid.FormatItemEventArgs) {
    if (e.panel == s.columnHeaders) {
      e.cell.innerHTML =
        '<div class="column-header">' + e.cell.textContent + '</div>';
    }
  }

  onInitialized() {
    this.getHeaderLayout();
  }

  getHeaderLayout() {
    this.headerLayout = [
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L16024'),
            binding: 'customerSampleNo',
          },
          {
            header: this.translate.instant('sqrm.SQ_L16025'),
            binding: 'sonySampleNo',
          },
        ],
      },
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L16026'),
            binding: 'markLotNo',
          },
          { header: this.translate.instant('sqrm.SQ_L16027'), binding: 'id' },
        ],
      },
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L16028'),
            binding: 'dateOfFailureOccurence',
          },
          {
            header: this.translate.instant('sqrm.SQ_L16029'),
            binding: 'regionOfFailure',
          },
          {
            header: this.translate.instant('sqrm.SQ_L16030'),
            binding: 'detailProcessOfFailure',
          },
          {
            header: this.translate.instant('sqrm.SQ_L16031'),
            binding: 'failureMode',
            colspan: 3,
          },
        ],
      },
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L16032'),
            binding: 'confirmationSymptom',
          },
        ],
      },
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L16033'),
            binding: 'judgement',
          },
        ],
      },
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L16034'),
            binding: 'defectivenessModeNo',
          },
          {
            header: this.translate.instant('sqrm.SQ_L16035'),
            binding: 'sampleTreatment',
          },
        ],
      },
      {
        cells: [
          {
            header: `${this.translate.instant(
              'sqrm.SQ_L16037'
            )} <br /> ${this.translate.instant('sqrm.SQ_L16038')}`,
            binding: 'remarks',
          },
        ],
      },
    ];
  }
}
