  import { Component, OnInit, ChangeDetectionStrategy, ViewChild, } from '@angular/core';
  import { CollectionView } from '@grapecity/wijmo';
  import { SampleDialogComponent } from '../common/sample-dialog/sample-dialog.component';
  // Pop-up Dialog
  import { MatDialog } from '@angular/material/dialog';
  import { DialogService } from 'src/app/core/services/dialog.service';
  import { SweetAlertResult } from 'sweetalert2';
  @Component({
    selector: 'app-new-creation',
    templateUrl: './new-creation.component.html',
    styleUrls: ['./new-creation.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ImportInformationNewCreationComponent implements OnInit {
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
         { test: 'test', receptionNo: 'S21-0025' },
         { test: 'test', receptionNo: '' }
      ]);
    }
    save(): void {
      this.dialogService.confirm('sqrm.SQ_L19043').then((res: SweetAlertResult) => {
        if (res.isConfirmed) {
          this.dialogService.warning('sqrm.SQ_L19044').then((res: SweetAlertResult) => {});
        }
      });
    }

    showSampleDialog() {
      this.dialog.open(SampleDialogComponent).componentInstance;
    }
  }
  
  