import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';
import { MatDialog } from '@angular/material/dialog';
import { SelectUserComponent } from 'src/app/shared/select-user/select-user.component';

@Component({
  selector: 'app-select-destination-request',
  templateUrl: './select-destination-request.component.html',
  styleUrls: ['./select-destination-request.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDestinationRequestComponent implements OnInit {
  @Input() currentRoute: string = null;
  selDestinationData: CollectionView | [];
  public href: string = '';
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();
    this.selDestinationData = new CollectionView([
      {
        name: 'monique clariza',
        sectionName: 'XYZ Business Section',
        eMail: 'monclariza@xyz.com',
        delete: 'test',
      },
    ]);
  }t

  showSelectDestinationDialog() {
    const popup = this.dialog.open(SelectUserComponent).componentInstance;
    popup.dialogType = 'destination';
    popup.selectedDestination.subscribe((e) => console.log(e));
  }
}
