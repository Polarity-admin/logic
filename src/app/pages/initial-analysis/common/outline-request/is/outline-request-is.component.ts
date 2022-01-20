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
  selector: 'app-outline-request-is',
  templateUrl: './outline-request-is.component.html',
  styleUrls: ['./outline-request-is.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutlineRequestIsComponent implements OnInit {
  @Input() type: string = 'request';
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

  checkType() {
    return this.type === 'request';
  }
}
