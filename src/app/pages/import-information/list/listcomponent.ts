  import { Component, OnInit, ChangeDetectionStrategy, ViewChild, } from '@angular/core';
  import { CollectionView } from '@grapecity/wijmo';
  // Pop-up Dialog
  import { MatDialog } from '@angular/material/dialog';
  import { DialogService } from 'src/app/core/services/dialog.service';
  import { SweetAlertResult } from 'sweetalert2';
  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ImportInformationListComponent implements OnInit {
    testData: CollectionView | [];
    currentPage: number = 1;
  
    totalPages: number = 1;
    pages: number[] = [1];
  
    dropDownData1 = ['MS:OK', 'NG', '-MOS:Pass', 'Fail', '-'];
  
    constructor(
      private dialog: MatDialog,
      private dialogService: DialogService
    ) {}
  
    ngOnInit(): void {
      this.testData = new CollectionView([
         { 
           importControlNo: 'I1903-0001', 
           category: 'LSI E. Jyutaki', 
           recipientGroup: 'ITS-LSI', 
           importDate:'2019/03/22',
           awb:'1',
           exportCountry:'China',
           exporter:'1',
           importReason:'Malfunction product return',
           payment:'Free',
           importer1:'DHL',
           salesOutside:'EDMC (China)',
           importer2:'SCK',
           entryNo:'',
           noReturn:'',
           returnFreeReason:'',
           relatedExportNoFrom:'',
           relatedExportNoTo:'',
           receptionNo:'S19-0006',
           sample:'ALL',
           freightName:'IMX001AKE-1',
           qty:'1',
           unitPrice:'',
           total:'',
           unit:'US$',
           check:'-',
           ngReason:'',
           ngReportDate:'',
           remarks:'',
           lastUpdate:'2019/03/22 16:08',
           lastUpdatedBy:'',

        },
        { 
          importControlNo: 'I1903-0001', 
          category: 'LSI E. Jyutaki', 
          recipientGroup: 'ITS-LSI', 
          importDate:'2019/03/22',
          awb:'1',
          exportCountry:'China',
          exporter:'1',
          importReason:'Malfunction product return',
          payment:'Free',
          importer1:'DHL',
          salesOutside:'EDMC (Korea)',
          importer2:'SCK',
          entryNo:'',
          noReturn:'',
          returnFreeReason:'',
          relatedExportNoFrom:'',
          relatedExportNoTo:'',
          receptionNo:'S19-0006',
          sample:'ALL',
          freightName:'',
          qty:'',
          unitPrice:'',
          total:'',
          unit:'',
          check:'',
          ngReason:'',
          ngReportDate:'',
          remarks:'',
          lastUpdate:'2019/04/19 10:24',
          lastUpdatedBy:'',

       }
      ]);
    }

  }
  
  