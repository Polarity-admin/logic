import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';

@Component({
  selector: 'app-information-returned-samples',
  templateUrl: './information-returned-samples.component.html',
  styleUrls: ['./information-returned-samples.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationReturnedSamplesComponent implements OnInit {
  href: string = '';
  currentRoute: string = '';

  returnedSamplesData: CollectionView | [];
  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [1];

  dropDownData1 = [
    'Test 1', 
    'Test 2'
  ];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();
    
    this.returnedSamplesData = new CollectionView([
      {
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
      },
    ]);
  }
}

