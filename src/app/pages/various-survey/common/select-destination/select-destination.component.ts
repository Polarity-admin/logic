import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectUserComponent } from 'src/app/shared/select-user/select-user.component';

@Component({
  selector: 'app-select-destination',
  templateUrl: './select-destination.component.html',
  styleUrls: ['./select-destination.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDestinationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showSelectDestinationDialog() {
    const popup = this.dialog.open(SelectUserComponent).componentInstance;
    popup.dialogType = 'destination';
    popup.selectedDestination.subscribe((e) => console.log(e));
  }
}
