import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';


@Component({
  selector: 'app-historical-survey',
  templateUrl: './historical-survey.component.html',
  styleUrls: ['./historical-survey.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalSurveyComponent implements OnInit {
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

  constructor() {}

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
      sonySampleNo: '1',
      sliceNumber: '0',
      
    }]);
  }
}
