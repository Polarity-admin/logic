import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
} from '@angular/core';
import * as WijmoCore from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { Selector } from '@grapecity/wijmo.grid.selector';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailInfoComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid: FlexGrid;
  selector: Selector = null;
  tableData: WijmoCore.CollectionView | [];
  @Input() type: string = 'request';
  
  constructor() {}  

  ngOnInit(): void {
  }

  initGrid(grid: FlexGrid) {
    debugger
    // this.selector = new Selector(grid, { showCheckAll: false  });
  }

  getFrozenColumns() {
    return this.type === 'request' ? 0 : 3;
  }

  checkType() {
    return this.type === 'request';
  }
}
