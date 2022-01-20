import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  isIframe = false;
  options = {
    text: environment.env === 'dev' ? 'DEVELOPMENT SERVER' : environment.env === 'test' ? 'TEST SERVER' : '',
    height: 200,
    fontFamily: 'Meiryo UI',
    alpha: 0.2,
    backgroundPosition: '15% 0%'
  };

  constructor(
    private translate: TranslateService,
    private authService: AuthService
  ) {
    this.translate.addLangs(['en', 'ja']);
    const browserLang = this.translate.getBrowserLang();
    this.translate.setDefaultLang('ja');
    this.translate.use(browserLang.match(/en|ja/) ? browserLang : 'ja');
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.sidenav.open();
      }
    });
  }
  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;

  }

}
