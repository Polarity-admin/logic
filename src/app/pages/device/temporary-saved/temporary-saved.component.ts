import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';


@Component({
  selector: 'app-temporary-saved',
  templateUrl: './temporary-saved.component.html',
  styleUrls: ['./temporary-saved.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemporarySavedComponent implements OnInit {
  testData: CollectionView | [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.testData = new CollectionView([
      { 
        fileName: "Initial Analysis Request",
        link: "www.google.com",
        custName: "XYZ Incorporated",
        prodName: "Product 1",
        lastUpdate: "2021/12/07 17:21",

      }, 
      { 
        fileName: "Detail Analysis Request",
        link: "www.yahoo.com",
        custName: "ABC Corp",
        prodName: "Product 3",
        lastUpdate: "2021/12/08 17:21",

      }, 
      
    ]);

  }
 
}

