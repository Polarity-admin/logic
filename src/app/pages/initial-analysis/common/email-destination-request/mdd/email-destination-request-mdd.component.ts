import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-email-destination-request-mdd',
    templateUrl: './email-destination-request-mdd.component.html',
    styleUrls: ['./email-destination-request-mdd.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class EmailDestinationRequestMddComponent implements OnInit {
    @Input() currentRoute: string = null;

    public href: string = "";
    constructor(private router: Router) {}
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
         
    }
  }
  