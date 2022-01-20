import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';
import { SelectUserComponent } from 'src/app/shared/select-user/select-user.component';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowComponent implements OnInit {
  href: string = '';
  currentRoute: string = '';

  workFlowData: CollectionView | [];
  dropDownData = [
    'Request for characterization',
    'Request for structural analysis',
    'Failure investigation request 1',
    'Failure investigation request 2',
    '8D report request',
    'Request for measurement survey',
  ];
  
  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();

    this.workFlowData = new CollectionView([{
      step: 'test',
      name: 'test',
      sectionName: 'test',
      completionDate: 'test',
      result: 'test',
      comments: 'test'
    }]);
  }

  showSelectRequestDestinationDialog() {
    const popup = this.dialog.open(SelectUserComponent).componentInstance;
    popup.dialogType = 'request';
    popup.selectedRequestDestination.subscribe((e) => console.log(e));
  }

  showSelectApproverDialog() {
    const popup = this.dialog.open(SelectUserComponent).componentInstance;
    popup.dialogType = 'approver';
    popup.selectedApprover.subscribe((e) => console.log(e));
  }
}