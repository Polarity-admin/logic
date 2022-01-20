import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    ChangeDetectorRef,
} from '@angular/core';
import * as WijmoCore from '@grapecity/wijmo';
import * as WijmoGrid from '@grapecity/wijmo.grid';
import { HomeTableInfo } from 'src/app/data/schema/home';
import { HomeService } from 'src/app/data/service/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    @ViewChild('grid', { static: true }) grid: WijmoGrid.FlexGrid;
    tableInfo: WijmoCore.CollectionView | [];

    constructor(
        private homeService: HomeService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.homeService.getTableContent().subscribe((response: HomeTableInfo[]) => {
            this.tableInfo = new WijmoCore.CollectionView(response);
            this.cdr.markForCheck();
        });
    }

    initializeGrid(grid: WijmoGrid.FlexGrid) {
        grid.formatItem.addHandler((s, e) => {
            if (e.panel === s.cells && e.col === 1) {
                e.cell.innerHTML =
                    '<div style="height: 100%;vertical-align: middle;">' +
                    e.cell.innerHTML +
                    '</div>';
                WijmoCore.setCss(e.cell, {
                    textAlign: 'left',
                });
            }
            if (e.panel === s.cells && e.col === 2) {
                WijmoCore.setCss(e.cell, {
                    textAlign: 'left',
                });
            }
        });

        grid.allowMerging = WijmoGrid.AllowMerging.All;
        grid.columnHeaders.rows[0].allowMerging = true;
        grid.cells.rows[0].allowMerging = true;
    }
}
