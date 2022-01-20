import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-btn',
  templateUrl: './footer-btn.component.html',
  styleUrls: ['./footer-btn.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterBtnComponent implements OnInit {
  href: string = '';
  currentRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();
  }

}
