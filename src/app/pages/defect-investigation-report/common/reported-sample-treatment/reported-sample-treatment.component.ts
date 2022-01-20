import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import { CollectionView } from '@grapecity/wijmo';

@Component({
  selector: 'app-reported-sample-treatment',
  templateUrl: './reported-sample-treatment.component.html',
  styleUrls: ['./reported-sample-treatment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportedSampleTreatmentComponent implements OnInit {
  @Input() currentRoute: string = null;
  public href: string = "";
  returnedSamplesData: CollectionView | [];
  constructor(private router: Router) {}
  ngOnInit(): void {
        this.href = this.router.url;
        console.log(this.router.url);
        this.currentRoute =  this.href.split('/').pop();
        console.log('-------- currentRoute ---------')
        console.log(this.currentRoute)
        console.log('-------------------------------')
        this.returnedSamplesData = new CollectionView([{
          scope: false,
          sonyResponsibility: '0',
          custResponsility: '0',
          goodSample: '0',
          others: '0',
          underAnalysis: '0',
          total: '0',
          analyzedQuantity: '0',
         
        }]);
  }
}
