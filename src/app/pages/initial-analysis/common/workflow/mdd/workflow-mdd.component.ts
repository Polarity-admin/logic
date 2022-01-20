import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';
  @Component({
    selector: 'app-workflow-mdd',
    templateUrl: './workflow-mdd.component.html',
    styleUrls: ['./workflow-mdd.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class WorkflowMddComponent implements OnInit {
    @Input() currentRoute: string = null;
    workFlowData: CollectionView | [];
    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();

          this.workFlowData = new CollectionView([{
            step: 'Request by',
            name: 'monique clariza',
            sectionName: 'test',
            completionDate: 'test',
            result: 'test',
            comments: 'test'
          }]);

    }
  }
  