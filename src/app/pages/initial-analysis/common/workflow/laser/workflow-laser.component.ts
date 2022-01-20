import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';
  @Component({
    selector: 'app-workflow-laser',
    templateUrl: './workflow-laser.component.html',
    styleUrls: ['./workflow-laser.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class WorkflowLaserComponent implements OnInit {
    @Input() currentRoute: string = null;
    workFlowData: CollectionView | [];
    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();

          this.workFlowData = new CollectionView([{
            step: 'test',
            name: 'test',
            sectionName: 'test',
            completionDate: 'test',
            result: 'test',
            comments: 'test'
          }]);

    }
  }
  