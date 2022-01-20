import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowComponent implements OnInit {
  @Input() type: string = 'request';
  
  constructor() {}

  ngOnInit(): void {}
}
