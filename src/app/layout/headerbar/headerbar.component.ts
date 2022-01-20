import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
@Component({
    templateUrl: './headerbar.component.html',
    styleUrls: ['./headerbar.component.less'],
    selector: 'app-header-bar'
})
export class HeaderBarComponent implements OnInit {

    url: string;

    languages: string[];
    currentLang: string;
    dropdownDisplay = false;

    @Output() menuClick = new EventEmitter<void>();

    constructor(private translate: TranslateService, private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.pipe(
            filter((e) => e instanceof RouterEvent)
        ).subscribe((e: RouterEvent) => {
            this.url = e.url;

        });

        this.languages = this.translate.getLangs();
        this.currentLang = this.translate.currentLang;

        // this.translate.onLangChange.subscribe((res: any) => {
        //     this.translate.use(this.translate.currentLang);
        // });

    }

    languageChange(language: string): void {
        this.currentLang = language;
        this.translate.use(this.currentLang);
        this.dropdownDisplay = false;
    }

    clickMenu(): void {
        this.menuClick.emit();
    }
}
