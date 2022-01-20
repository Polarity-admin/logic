import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { ReferenceComponent } from '../reference/reference.component';
import { DestinationComponent } from '../destination/destination.component';
import { DestinationmComponent } from '../destinationm/destinationm.component';
import { ReportComponent } from '../report/report.component';
import { CheckingComponent } from '../checking/checking.component';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailComponent implements OnInit {
  @ViewChild('returnedSamplesGrid', { static: true}) returnedSamplesGrid: FlexGrid;
  @ViewChild('workFlowGrid', { static: true}) workFlowGrid: FlexGrid;

  SamplesData: CollectionView | [];
  SampleData: CollectionView | [];
  SampleAttachment: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [
  
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.SamplesData = new CollectionView([{
      step: 'test',
      receptionno: 'test',
      category: 'test',
      productcategory: 'test',
      customername: 'test',
      productname: 'test'
    }]);
    
    this.SampleData = new CollectionView([{
      scope: false,
      ver: 'ver2',
      customername: 'test',
      productname: 'IMX001AKE-1',
      reportno: 'S18-0001-H02',
      filename: 'test.pdf',
      password: 'test',
      filesize: 'test',
    }]);

    this.SampleAttachment = new CollectionView([{
      filename: 'tmp1.txt',
      filesize: '6Bytes',
      uploadeddateandtime: '2021/12/06 17:12',
    }]);

  }

  showActions() {
    const popup = this.dialog.open(ReferenceComponent).componentInstance;
  }

  showActions1() {
    const popup = this.dialog.open(DestinationComponent).componentInstance;
  }

  showActions2() {
    const popup = this.dialog.open(ReportComponent).componentInstance;
  }

  showActions3() {
    const popup = this.dialog.open(CheckingComponent).componentInstance;
  }
  
  showActions4() {
    const popup = this.dialog.open(DestinationmComponent).componentInstance;
  }

}
