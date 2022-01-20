import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-file-attachment',
  templateUrl: './file-attachment.component.html',
  styleUrls: ['./file-attachment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileAttachmentComponent implements OnInit {
  @Input() type: string = 'request';
  constructor() { }

  ngOnInit(): void {
  }

}
