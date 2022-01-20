import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { FormBuilder, FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-footer-mdd',
    templateUrl: './footer-mdd.component.html',
    styleUrls: ['./footer-mdd.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class FooterMddComponent implements OnInit {
    @Input() currentRoute: string = null;

    public href: string = "";
    constructor(private router: Router) { }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
    }
  }
  