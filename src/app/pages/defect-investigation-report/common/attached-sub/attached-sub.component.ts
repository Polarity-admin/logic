import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import * as wjGrid from '@grapecity/wijmo.grid';
import { CollectionView } from '@grapecity/wijmo';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-attached-sub',
  templateUrl: './attached-sub.component.html',
  styleUrls: ['./attached-sub.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachedSubComponent implements OnInit {
  @Input() currentRoute: string = null;
  href: string = '';

  headerLayout = [];
  reportData = [];
  attachedData: CollectionView | [];
  type: string = 'add-report';

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.href = this.router.url
    this.currentRoute = this.href.split('/').pop();
    const tableData = [
      {
        title: 'Ver 2', 
        data: [
          {
            scope: true,
            ver: 'ver.2',
            fileName: 'Sample3.pptx',
            fileSize: '519KB',
            pdfFileName: 'Sample3.pdf',
            pdfFileSize: '11133KB',
            password: 'aaaaaaaaa',
            lastUpdate: '2021/12/01 8:16',
            lastUpdatedBy: 'monclariza',
          },
          {
            scope: true,
            ver: 'ver.2',
            fileName: 'Sample3.pptx',
            fileSize: '519KB',
            pdfFileName: 'Sample3.pdf',
            pdfFileSize: '11133KB',
            password: 'aaaaaaaaa',
            lastUpdate: '2021/12/01 8:16',
            lastUpdatedBy: 'monclariza',
          },
        ]
      },
      {
        title: 'Ver 1', 
        data: [
          {
            scope: true,
            ver: 'ver.1',
            fileName: 'Sample3.pptx',
            fileSize: '519KB',
            pdfFileName: 'Sample3.pdf',
            pdfFileSize: '11133KB',
            password: 'aaaaaaaaa',
            lastUpdate: '2021/12/01 8:16',
            lastUpdatedBy: 'monclariza',
          },
        ]
      }
    ];

    this.attachedData = new CollectionView(tableData[0].data);
    this.reportData = tableData;


    this.translate.onLangChange.subscribe(() => {
      this.getHeaderLayout();
    })
  }

  formatItem(s: wjGrid.FlexGrid, e: wjGrid.FormatItemEventArgs) {
    if (e.panel == s.columnHeaders) {
      e.cell.innerHTML =
        '<div class="column-header">' + e.cell.textContent + '</div>';
    }
  }

  getData(data) {
    console.log(data);
  }

  onInitialized() {
    this.getHeaderLayout();
  }

  getHeaderLayout() {
    this.headerLayout = [
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L04112'),
            colspan: 2,
          },
          {
            header: this.translate.instant('sqrm.SQ_L04113'),
          },
          {
            header: this.translate.instant('sqrm.SQ_L04114'),
          },
        ],
      },
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L04115'),
            colspan: 2,
          },
          {
            header: this.translate.instant('sqrm.SQ_L04116'),
          },
          {
            header: this.translate.instant('sqrm.SQ_L04117'),
          },
        ],
      },
      {
        cells: [
          {
            header: `${this.translate.instant('sqrm.SQ_L04118')} <br /> <p class="required">${this.translate.instant('sqrm.SQ_L04119')}</p>`,
          },
        ],
      },
      {
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L04120'),
          },
          {
            header: this.translate.instant('sqrm.SQ_L04121'),
          },
        ],
      },
    ];
    
    if(this.type === 'add-report') {
      this.headerLayout.unshift({
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L04111'),
            align: "center"
          },
        ],
      })
      this.headerLayout.unshift({
        cells: [
          {
            header: this.translate.instant('sqrm.SQ_L04110'),
            align: "center"
          },
        ],
      });
    }
  }
}
