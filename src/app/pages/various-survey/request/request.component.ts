import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { HistoricalSurveyComponent } from '../../historical-survey/historical-survey/historical-survey.component';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestComponent implements OnInit {
  @ViewChild('returnedSamplesGrid', { static: true}) returnedSamplesGrid: FlexGrid;
  @ViewChild('workFlowGrid', { static: true}) workFlowGrid: FlexGrid;

  workFlowData: CollectionView | [];
  returnedSamplesData: CollectionView | [];
  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [1];
  dropDownData = [
    'Request for characterization',
    'Request for structural analysis',
    'Failure investigation request 1',
    'Failure investigation request 2',
    '8D report request',
    'Request for measurement survey',
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
      symptomConfirmedbySony: 'test',
      judgement: 'test',
      detailsOfRequest: 'test',
    }]);
  }

  showActions() {
    const popup = this.dialog.open(HistoricalSurveyComponent).componentInstance;
  }
}
