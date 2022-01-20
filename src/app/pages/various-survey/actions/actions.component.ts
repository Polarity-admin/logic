import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';


class CustomMergeManager extends wjGrid.MergeManager {
  getMergedRange(panel: wjGrid.GridPanel, r: number, c: number, clip: boolean = true) {
    var rng = new wjGrid.CellRange(r, c);
    if (panel.cellType == wjGrid.CellType.ColumnHeader || panel.cellType == wjGrid.CellType.TopLeft) {
      // create basic cell range

      // expand up/down
      for (var i = rng.row; i < panel.rows.length - 1; i++) {
        if (panel.getCellData(i, rng.col, true) != panel.getCellData(i + 1, rng.col, true))
          break;
        rng.row2 = i + 1;
      }
      for (var i = rng.row; i > 0; i--) {
        if (panel.getCellData(i, rng.col, true) != panel.getCellData(i - 1, rng.col, true))
          break;
        rng.row = i - 1;
      }
      
    }

    return rng;
  }
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent implements OnInit {
  @ViewChild('workFlowGrid', { static: true }) grid: wjGrid.FlexGrid;
  testData = [
    {
      title: 'Correction actions info. S21-0010-G01:0',
      data: [
        { actionNo: 'test', actionDatePlan: 'test' },
        { actionNo: 'test', actionDatePlan: 'test' },
        { actionNo: 'test', actionDatePlan: 'test' },
      ],
    },
    {
      title: 'Correction actions info. S21-0010-G02:0',
      data: [{ actionNo: 'test' }, { actionNo: 'test' }, { actionNo: 'test' }],
    },
    {
      title: 'Correction actions info. S21-0010-G02:0',
      data: [{ actionNo: 'test' }, { actionNo: 'test' }, { actionNo: 'test' }],
    },
  ];

  testSelect = ['Test 1', 'Test 2', 'Test 3'];

  constructor() {}

  ngOnInit(): void {
    // this.grid.rows.defaultSize = 35;
  }

  onInitialized(grid: wjGrid.FlexGrid) {
    grid.mergeManager = new CustomMergeManager();
  }
}
