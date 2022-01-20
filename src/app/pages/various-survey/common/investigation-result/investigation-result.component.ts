import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investigation-result',
  templateUrl: './investigation-result.component.html',
  styleUrls: ['./investigation-result.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestigationResultComponent implements OnInit {
  href: string = '';
  currentRoute: string = '';
  selected: string = 'Request for characterization';

  dropDownData = [
    'Request for characterization',
    'Request for structural analysis',
    'Failure investigation request 1',
    'Failure investigation request 2',
    '8D report request',
    'Request for measurement survey',
  ];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();
  }

}
