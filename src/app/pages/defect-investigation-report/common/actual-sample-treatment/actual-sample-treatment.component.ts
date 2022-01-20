import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';
import { FormBuilder, FormControl } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-actual-sample-treatment',
  templateUrl: './actual-sample-treatment.component.html',
  styleUrls: ['./actual-sample-treatment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualSampleReTreatmentComponent implements OnInit {
  @Input() currentRoute: string = null;
  testData: CollectionView | [];
  public href: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    this.currentRoute = this.href.split('/').pop();
    console.log('-------- currentRoute ---------');
    console.log(this.currentRoute);
    console.log('-------------------------------');
    this.testData = new CollectionView([
      {
        debitNote: 0,
        customerResponsibility: 0,
        goodSample: 0,
        other: 0,
        total: 0,
      },
      {
        debitNote: 0,
        customerResponsibility: 0,
        goodSample: 0,
        other: 0,
        total: 0,
      },
    ]);
  }
}
