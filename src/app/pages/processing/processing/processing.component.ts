import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { CertificateComponent } from '../certificate/certificate.component';


@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessingComponent implements OnInit {

  workFlowData: CollectionView | [];
  returnedSamplesData: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [

  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.workFlowData = new CollectionView([{
      step: 'test',
      name: 'test',
      sectionName: 'test',
      completionDate: 'test',
      result: 'test',
      comments: 'test'
    }]);
    
    this.returnedSamplesData = new CollectionView([{
      scope: false,
      select: 'test',
      receptionNo: 'test',
      receptionDate: 'test',
      customerName: 'test',
      productName: 'test',
      customerSampleNo: 'test',
      sonySampleNo: 'test',
      sampletreatment: 'test',
      confirmationsymptom: 'test',
      judgment: 'test',
      responsibility: 'test',
      disposalduedate: 'test',
      disposaldate: 'test',
      disposalcertificate: 'test',
      disposedcheck: 'test',
      remarks: 'test',
      lastupdate: 'test',
      lastupdatedby: 'test',
    }]);
  }

  showActions() {
    const popup = this.dialog.open(CertificateComponent).componentInstance;
  }

}
