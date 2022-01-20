import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-destination-request',
  templateUrl: './email-destination-request.component.html',
  styleUrls: ['./email-destination-request.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailDestinationRequestComponent implements OnInit {
  @Input() currentRoute: string = null;

  public href: string = '';
  constructor(private router: Router) {}
  disabled: boolean = true;

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();
  }
}
