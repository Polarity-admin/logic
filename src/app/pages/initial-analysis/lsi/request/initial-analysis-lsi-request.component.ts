import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationComponent } from '../../common/navigation/navigation.component';

@Component({
    selector: 'app-initial-analysis-lsi-request',
    templateUrl: './initial-analysis-lsi-request.component.html',
    styleUrls: ['./initial-analysis-lsi-request.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitialAnalysisLsiRequestComponent implements OnInit {

    constructor(private dialog: MatDialog) { }
  
    ngOnInit(): void {
    }
    
    showNavigationDialog() {
        console.log('<<<<<<<< test >>>>>>>')
        const popup = this.dialog.open(NavigationComponent, {
            width: '600px',
         }).componentInstance;
    }
  }
  
