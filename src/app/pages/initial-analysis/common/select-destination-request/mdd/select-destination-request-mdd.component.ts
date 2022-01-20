import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';

  @Component({
    selector: 'app-select-destination-request-mdd',
    templateUrl: './select-destination-request-mdd.component.html',
    styleUrls: ['./select-destination-request-mdd.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SelectDestinationRequestMddComponent implements OnInit {
    @Input() currentRoute: string = null;
    selDestinationData: CollectionView | [];
    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
          this.selDestinationData = new CollectionView([{
            name: 'monique clariza',
            sectionName: 'XYZ Business Section',
            eMail: 'monclariza@xyz.com',
            delete: 'test',

          }]);
    }
  }
  