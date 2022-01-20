import { Component, OnInit, ChangeDetectionStrategy, ViewChild, } from '@angular/core';
import * as wjCore from '@grapecity/wijmo';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { SelectCustomerComponent } from 'src/app/shared/select-customer/select-customer.component';
// For Dialog
import { DialogService } from 'src/app/core/services/dialog.service';
import { SweetAlertResult } from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDialogComponent implements OnInit {
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
  showSelectCustomerDialog() {
    const popup = this.dialog.open(SelectCustomerComponent).componentInstance;
  }
  
  
}
