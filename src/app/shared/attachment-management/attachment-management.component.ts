import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-attachment-management',
  templateUrl: './attachment-management.component.html',
  styleUrls: ['./attachment-management.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachmentManagementComponent implements OnInit {
  type = 'file-manager';
  testVerData = [
    {
      title: 'S21-0025',
      data: [
        {
          fileName: 'Test',
          fileSize: '20Mb',
          comments: 'Test comment',
          updatedBy: 'Test'
        },
        {
          fileName: 'Test',
          fileSize: '20Mb',
          comments: 'Test comment',
          updatedBy: 'Test'
        },
      ],
    },
    {
      title: 'S21-0026',
      data: [
        {
          fileName: 'Test',
          fileSize: '20Mb',
          comments: 'Test comment',
          updatedBy: 'Test'
        },
        {
          fileName: 'Test',
          fileSize: '20Mb',
          comments: 'Test comment',
          updatedBy: 'Test'
        },
      ]
    },
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  showConfirmDialog() {
    const popup = this.dialog.open(AttachmentManagementComponent).componentInstance;
    popup.type = 'update-file';
  }
}
