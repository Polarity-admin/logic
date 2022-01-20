import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-remarks-is',
    templateUrl: './remarks-is.component.html',
    styleUrls: ['./remarks-is.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class RemarksIsComponent implements OnInit {
    @Input() currentRoute: string = null;

    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          console.log(this.router.url);
          this.currentRoute =  this.href.split('/').pop();
          console.log('-------- currentRoute ---------')
          console.log(this.currentRoute)
          console.log('-------------------------------')
          
    }
  }
  