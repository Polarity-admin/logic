import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, AuthenticationResult, InteractionStatus } from '@azure/msal-browser';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, OnDestroy {

  @ViewChild('grid', { static: true }) grid: wjcGrid.FlexGrid;
  homeInfo: wjcCore.CollectionView | undefined;
  loginDisplay = false;
  displayedColumns: string[] = ['claim', 'value'];
  dataSource: any = [];

  displayName = '';
  principal = '';
  oid = '';
  isUseAAd = false;
  showImgJa = true;

  notificationMsg: string;

  private readonly destroying$ = new Subject<void>();

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    if (this.translate.currentLang === 'ja') {
      this.showImgJa = true;
    } else {
      this.showImgJa = false;
    }
  }

  ngOnInit(): void {

    this.isUseAAd = environment.isUseAAD;
    if (environment.isUseAAD) {
      this.msalBroadcastService.msalSubject$
        .pipe(
          filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
          takeUntil(this.destroying$)
        )
        .subscribe((result: EventMessage) => {

          const payload = result.payload as AuthenticationResult;
          this.authService.instance.setActiveAccount(payload.account);
        });

      this.msalBroadcastService.inProgress$
        .pipe(
          filter((status: InteractionStatus) => status === InteractionStatus.None)
        )
        .subscribe(() => {
          this.setLoginDisplay();
        });
    } else {

    }

  }

  setLoginDisplay(): void {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

  }

  ngOnDestroy(): void {
    this.destroying$.next(undefined);
    this.destroying$.complete();
  }

}
