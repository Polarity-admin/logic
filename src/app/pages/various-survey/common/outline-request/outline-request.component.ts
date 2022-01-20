import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outline-request',
  templateUrl: './outline-request.component.html',
  styleUrls: ['./outline-request.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineRequestComponent implements OnInit {
  href: string = '';
  currentRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();
  }

}
