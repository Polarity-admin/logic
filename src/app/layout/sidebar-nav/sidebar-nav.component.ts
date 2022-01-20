import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { WjAccordion } from '@grapecity/wijmo.angular2.nav';
@Component({

    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.less'],
    selector: 'app-sidebar-nav'
})

export class SideBarNavComponent implements OnInit, AfterViewInit {

    @ViewChild('accordion', { static: true }) accordion: WjAccordion;
    @Output() closeClick = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.accordion.selectedIndex = this.accordion.panes.length;
    }

    sidebarClose(): void {
        this.closeClick.emit();
    }
}
