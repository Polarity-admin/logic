import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';
import { MatDialog } from '@angular/material/dialog';
import { SeeReportComponent } from '../see-report/see-report.component';
import { AttachedSubComponent } from '../attached-sub/attached-sub.component';

@Component({
  selector: 'app-failure-analysis-report',
  templateUrl: './failure-analysis-report.component.html',
  styleUrls: ['./failure-analysis-report.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FailureAnalysisReportComponent implements OnInit {
  @Input() currentRoute: string = null;
  public href: string = '';
  returnedSamplesData: CollectionView | [];

  dropDownData = ['Option 1', 'Option 2'];

  constructor(private router: Router, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    this.currentRoute = this.href.split('/').pop();
    console.log('-------- currentRoute ---------');
    console.log(this.currentRoute);
    console.log('-------------------------------');
    this.returnedSamplesData = new CollectionView([
      {
        scope: false,
        ver: 'Ver.1',
        reportNo: 'S21-0024-H01',
        reportDate: '2021/12/06',
        nextReportDate: '2021/12/09',
        final: false,
        reportTemplate: 'Japanese',
        originalReport: 'Sample3.pptx',
        reportCheck: false,
      },
      {
        scope: false,
        ver: 'Ver.1',
        reportNo: 'S21-0024-H01',
        reportDate: '2021/12/06',
        nextReportDate: '2021/12/09',
        final: false,
        reportTemplate: 'Japanese',
        originalReport: 'Sample3.pptx',
        reportCheck: false,
      },
    ]);
  }

  viewPDF() {
    this.dialog.open(SeeReportComponent);
  }

  showAttachedSub(type) {
    const popup = this.dialog.open(AttachedSubComponent).componentInstance;
    popup.type = type;
  }
}
