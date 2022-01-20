import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// For Dialog
import { DialogService } from 'src/app/core/services/dialog.service';
import { SweetAlertResult } from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

import { InitialAnalysisFinalReportComponent } from '../../final-report/final-report.component';
  
  @Component({
    selector: 'app-footer-laser',
    templateUrl: './footer-laser.component.html',
    styleUrls: ['./footer-laser.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class FooterLaserComponent implements OnInit {
    @Input() currentRoute: string = null;
    type = 'final-report';
    public href: string = "";

    constructor (
      private router: Router, 
      private dialog: MatDialog,
      private dialogService: DialogService
       ) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
          
    }

    showActions() {
      const popup = this.dialog.open(InitialAnalysisFinalReportComponent).componentInstance;
    }

    close(): void {
        this.dialogService.confirm('sqrm.SQ_L06105').then((res: SweetAlertResult) => {

          if (res.isConfirmed) {
            this.dialog.open(InitialAnalysisFinalReportComponent).componentInstance;
          }
        });
    }
  }
  