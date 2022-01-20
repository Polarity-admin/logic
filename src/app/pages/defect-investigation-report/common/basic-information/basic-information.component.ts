import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationComponent implements OnInit {
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
}
