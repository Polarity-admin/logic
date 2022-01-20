import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { filter } from 'rxjs/operators';
import {
  Router,
  NavigationEnd
} from '@angular/router';

import { FormBuilder, FormControl } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-outline-request-mdd',
  templateUrl: './outline-request-mdd.component.html',
  styleUrls: ['./outline-request-mdd.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutlineRequestMddComponent implements OnInit {
  @Input() currentRoute: string = null;
  public href: string = "";
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
        this.href = this.router.url;
        this.currentRoute =  this.href.split('/').pop();
        
  }

}
