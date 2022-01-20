import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';


@Component({
  selector: 'app-processing',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificateComponent implements OnInit {

  SamplesData: CollectionView | [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    
    this.SamplesData = new CollectionView([{
      scope: false,
      select: 'test',
      filename: 'Test1124.pdf',
      filesize: '206KB',
      comments: 'test',
      updatedate: '2021-11-24 13:51'
    }]);
  }


}
