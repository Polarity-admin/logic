import { Component, OnInit, ChangeDetectionStrategy, } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';

// import * as wjcCore from '@grapecity/wijmo';
// import * as wjcNav from '@grapecity/wijmo.nav';

// import { MatTreeModule } from '@angular/material/tree';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { FlatTreeControl } from '@angular/cdk/tree';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface SqrmNode {
  name: string;
  url?: string;
  children?: SqrmNode[];
}

const TREE_DATA: SqrmNode[] = [
  {
    name: "K19-9008", 
    children: [
      { name: "Modify attached files" , url: "/initial-analysis/is-request"},
      { name: "Unknown", url: "/initial-analysis/is-request" },
      {
        name:"Initial analysis", 
        url: "/initial-analysis/is-request",
        children: [
          { name: "Create new page" , url: "/initial-analysis/is-request"},
          { name: "K19-9008-F01 Ver. 1", url:"/initial-analysis/is-request",
            children:[
              { name: "Modify attached files", url: "/initial-analysis/is-request"}
            ]
          },
          { name: "K19-9008-F01 Ver.2",
            url: "/initial-analysis/is-request",
            children:[
              { name:"Modify attached files"}
            ]
          },
          { name: "K19-9008-F01 Ver.3",
            url: "/initial-analysis/is-request",
            children:[
              { name: "Modify attached files", url: "/initial-analysis/is-request"}
            ]
          }
        ]
      }, 
      {
        name: "Analysis and investigations",
        url: "/initial-analysis/is-request",
        children: [
          { name: "Create new page", url: "/initial-analysis/is-request" },
          { name: "K19-9008-G01 Ver. 1",
            url: "/initial-analysis/is-request",
            children:[
              { name: "Modify attached files", url: "/initial-analysis/is-request" }
            ]
          },
          { name: 'K19-9008-G01 Ver.2',
            url: '/initial-analysis/is-request',
            children:[
              { name: 'Modify attached files'}
            ]
          },
          { name: 'K19-9008-G01 Ver.3',
            url: '/initial-analysis/is-request',
            children:[
              { name: 'Modify attached files'}
            ]
          }
        ]
      },
      {
        name: 'Analysis report',
        url: '/initial-analysis/is-request',
        children: [
          { name: "K19-9008-H01 Ver.1 (Report date: 2019/11/27)",
            url: "/initial-analysis/is-request",
            children:[
              { name: "Modify attached files", url: "/initial-analysis/is-request"}
            ]
          },
          { name: "K19-9008-H01 Ver.2 (Report date: 2019/11/29 Final)",
            url: "/initial-analysis/is-request",
            children:[
              { name: "Modify attached files"}
            ]
          },
          { name: "K19-9008-H01 Ver.3 (Report date: 2019/11/24)",
            url: "/initial-analysis/is-request",
            children:[
              { name: "Modify attached files"}
            ]
          },
          { name:"History of report sending", url: "" }
        ]
      },
      { name: "List of returned samples", url: "" },
      { name: "List of returned samples' status", url: "" },
      {
        name: "Other relevalent documents",
        url:"",
        children:[
          { name: "Modify attached files"}
        ]
      },
      { name: "History", url:"" }
    ]
  },
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NavigationComponent implements OnInit {
  treeControl = new NestedTreeControl<SqrmNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SqrmNode>();
  constructor( 
    private dialog: MatDialog,
    private dialogService: DialogService,
  ) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: SqrmNode) => !!node.children && node.children.length > 0;
  
  ngOnInit(): void {}

  onInitialized() {}
}
