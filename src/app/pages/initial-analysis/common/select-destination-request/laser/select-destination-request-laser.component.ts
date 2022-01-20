import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';

  @Component({
    selector: 'app-select-destination-request-laser',
    templateUrl: './select-destination-request-laser.component.html',
    styleUrls: ['./select-destination-request-laser.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SelectDestinationRequestLaserComponent implements OnInit {
    @Input() currentRoute: string = null;
    selDestinationData: CollectionView | [];
    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
          this.selDestinationData = new CollectionView([{
            name: 'test',
            sectionName: 'test',
            eMail: 'test',
            delete: 'test',
          }]);
    }
  }
  