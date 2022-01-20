import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-report',
  templateUrl: './see-report.component.html',
  styleUrls: ['./see-report.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeReportComponent implements OnInit {
  @Input() currentRoute: string = null;

  private href: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();
  }
}
