import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import {
  Router,
  NavigationEnd
} from '@angular/router';

import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-information-returned-samples-mdd',
  templateUrl: './information-returned-samples-mdd.component.html',
  styleUrls: ['./information-returned-samples-mdd.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationReturnedSamplesMddComponent implements OnInit {
  @Input() currentRoute: string = null;
  @Input()  countRecord = [
    '1-3'];
  currentPage: number = 10;
  totalPages: number = 1;
  pages: number[] = [1];
  workFlowData: CollectionView | [];
  returnedSamplesData: CollectionView | [];
  public href: string ="";
  
  
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.href = this.router.url
    this.currentRoute = this.href.split('/').pop();

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
     
      tester: 'test',
      customersSet: 'test',
      evaluationBoard: 'test',
      detailsOfAnalysisResult: 'test'
    }]);
   
  }

}
