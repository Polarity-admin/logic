import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { SelectCustomerComponent } from 'src/app/shared/select-customer/select-customer.component';
import { OccurenceComponent } from '../occurence/occurence.component';
import { ProductInformationComponent } from '../product-information/product-information.component';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReceptionComponent implements OnInit {
  SampleData: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [
  
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.SampleData = new CollectionView([{
      scope: false,
      customersampleno: 'test1',
      marklotno: 'test1',
      dateoffailureoccurence: 'test1',
      processoffailure: 'test1',
      failuremode: 'test1',
      dateoffailuremode: 'test',
      sonysampleno: 'test',
      id: 'test',
      region: 'test',
      detailprocessoffailure: 'test',
      detailoffailuremode: 'test',
      remounted: 'test',
      productcode: 'test',
    }]);
  }
  
  showOccurenceConditionDialog() {
    const popup = this.dialog.open(OccurenceComponent).componentInstance;
    popup.occurenceData = {
      use: "Test Application",
      driveMode: "Test Drive Mode"
    };
    popup.submitted.subscribe((e) => console.log('Usage condition data ==> ', e));
  }

  showProductInformationDialog(): void {
    const popup = this.dialog.open(ProductInformationComponent).componentInstance;
  }

  showSelectCustomerDialog() {
    const popup = this.dialog.open(SelectCustomerComponent).componentInstance;
    popup.selectedCustomer.subscribe((e) => console.log(e));
  }
}
