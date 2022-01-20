import { Component, OnInit, ChangeDetectionStrategy, ViewChild, } from '@angular/core';
import * as wjCore from '@grapecity/wijmo';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
// For Dialog
import { DialogService } from 'src/app/core/services/dialog.service';
import { SweetAlertResult } from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleDialogComponent implements OnInit {
  testData: CollectionView | [];
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.testData = new CollectionView([
      { test: '1', receptionNo: 'S21-0025' }
   ]);
  }
  
  
}
