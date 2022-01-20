import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-select-destination-request-lsi',
    templateUrl: './select-destination-request-lsi.component.html',
    styleUrls: ['./select-destination-request-lsi.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SelectDestinationRequestLsiComponent implements OnInit {
    @Input() currentRoute: string = null;

    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
          
    }
  }
  