import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import * as wjCore from '@grapecity/wijmo';
import { MatDialog } from '@angular/material/dialog';

// For Dialog
import { DialogService } from 'src/app/core/services/dialog.service';
import { SweetAlertResult } from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitialAnalysisFinalReportComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {}
  
  
}
