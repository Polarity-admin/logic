import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-email-destination-analysis-laser',
    templateUrl: './email-destination-analysis-laser.component.html',
    styleUrls: ['./email-destination-analysis-laser.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class EmailDestinationAnalysisLaserComponent implements OnInit {
    @Input() currentRoute: string = null;

    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          console.log(this.router.url);
          this.currentRoute =  this.href.split('/').pop();
          
    }
  }
    