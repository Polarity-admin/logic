import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';
// For Dialog
import { MatDialog } from '@angular/material/dialog';
import { AttachedSubComponent } from '../attached-sub/attached-sub.component';
import { SelectUserComponent } from 'src/app/shared/select-user/select-user.component';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowComponent implements OnInit {
  @Input() currentRoute: string = null;
  workFlowData: CollectionView | [];
  public href: string = '';

  dropDownData = [
    'Option 1', 
    'Option 2'
  ];

  dropDownData1 = [
    'Factory Business System Management Section'
  ]
  

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();

    this.workFlowData = new CollectionView([
      {
        step: 'test',
        name: 'test',
        sectionName: 'test',
        completionDate: 'test',
        result: 'test',
        comments: 'test',
      },
    ]);
  }

  showAttachedSub() {
    const popup = this.dialog.open(AttachedSubComponent).componentInstance;
  }

  showSelectApproverDialog() {
    const popup = this.dialog.open(SelectUserComponent).componentInstance;
    popup.dialogType = 'approver';
    popup.selectedApprover.subscribe((e) => console.log(e));
  }
}
