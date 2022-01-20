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
  selector: 'app-outline-request-laser',
  templateUrl: './outline-request-laser.component.html',
  styleUrls: ['./outline-request-laser.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutlineRequestLaserComponent implements OnInit {
  @Input() currentRoute: string = null;
  outlineReqData: any[]
  public href: string = "";
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
        this.href = this.router.url;
        this.currentRoute =  this.href.split('/').pop();
        this.outlineReqData= [
          { "name" : "□End face observation (through glass)" },
          { "name" : "□Baraana measurement" },
          { "name" : "□Appearance observation (engraved)" },
          { "name" : "□SEM-EDX" },
          { "name" : "□NFP(Front" },
          { "name" : "□CLtopo" },

          { "name" : "□NFP(Rear)" },
          { "name" : "□FT-IR" },
          { "name" : "□Check airtightness" },
          { "name" : "□Auger" },
          { "name" : "□Remove OP jig" },

          { "name" : "□FIB-STEM" },
          { "name" : "□Moisture analysis" },
          { "name" : "□FIB TEM" },
          { "name" : "□Confirmation of static characteristics" },
          { "name" : "□Temperature characteristics" },
          { "name" : "□Life test" },
          { "name" : "□Others" }
        ]
  }

}
