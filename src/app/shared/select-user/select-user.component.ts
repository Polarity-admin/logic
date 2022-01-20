import { CdkColumnDef } from '@angular/cdk/table';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import * as wjInput from '@grapecity/wijmo.input';
import * as wjGrid from '@grapecity/wijmo.grid';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { DialogService } from 'src/app/core/services/dialog.service';
import { User } from 'src/app/data/schema/user';
import { ComboBoxService } from 'src/app/data/service/combobox.service';
import { UsersService } from 'src/app/data/service/users.service';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SelectUserComponent implements OnInit {
  @ViewChild('grid') grid: wjGrid.FlexGrid;
  @ViewChild('company') company: wjInput.ComboBox;
  @Output() selectedRequestDestination = new EventEmitter<any>();
  @Output() selectedApprover = new EventEmitter<any>();
  @Output() selectedDestination = new EventEmitter<any>();

  name: string = '';
  section: string = '';
  email: string = '';

  userType = 'confirmer';
  dialogType = 'approver';
  companyList = [];
  
  data = [];

  selectedItems: any[] = [];
  selector: Selector = null;
  searchResults = new CollectionView();

  constructor(
    private dialogRef: MatDialogRef<SelectUserComponent>,
    private usersService: UsersService,
    private dialogService: DialogService,
    private comboBoxService: ComboBoxService
  ) {}

  ngOnInit(): void {
    this.comboBoxService.getOptionList('_TMP-D2001-COMPANY').subscribe((e) => {
      this.companyList = e.combobox;
    })
  }

  initializeGrid(grid: wjGrid.FlexGrid): void {
    if (this.dialogType !== 'request') {
      this.selector = new Selector(grid, {
        showCheckAll: false,
        itemChecked: () => {
          this.selectedItems = grid.rows.filter(r => {
            if(
              this.dialogType === 'approver' &&
              this.userType === 'approver' &&
              this.selectedItems.length > 0 && 
              this.selectedItems[0].dataIndex === r.dataIndex) {
              r.isSelected = false;
            }

            return r.isSelected
          });
          this.searchResults.refresh();
        },
      });
    }
  }


  onChangeUserType(e): void {
    this.userType = e.target.value;
    this.uncheckAllGrid();
  }

  searchUsers(): void {
    const filter = {
      userName: this.name,
      sectionName: this.section,
      mail: this.email,
      companyCode: this.company.selectedValue
    }

    this.usersService.searchUsers(filter).subscribe((res: User[]) => {
      this.uncheckAllGrid();

      this.data = res;
      this.searchResults = new CollectionView(res, { 
        pageSize: 10
      });
    });
  }

  // Select Approver
  selectApprover(): void {
    if(this.selectedItems.length === 0) {
      return;
    } 
    
    this.selectedApprover.emit({
      type: this.userType,
      users: this.mapRowObjToDataItem()
    });
    
    if(this.userType === 'approver') {
      this.closeDialog();
    } else {
      this.uncheckAllGrid();
      this.dialogService.success('sqrm.SQ_L08021');
    }
  }

  // Select Destination
  selectDestination(): void {
    this.selectedDestination.emit(this.mapRowObjToDataItem());
    this.closeDialog();
  }
  selectAllDestination(): void {
    this.selectedDestination.emit(this.data);
    this.closeDialog();
  }

  // Select Request Destination
  selectRequestDestination(item: any): void {
    this.selectedRequestDestination.emit(item);
    this.closeDialog();
  }

  mapRowObjToDataItem(): any[] {
    return this.selectedItems.reduce((a, r) => {
      a.push(r.dataItem);
      return a;
    }, []);
  }

  closeDialog(): void {
    this.dialogRef.close();

    setTimeout(() => {
      this.selectedApprover.unsubscribe();
      this.selectedDestination.unsubscribe();
      this.selectedRequestDestination.unsubscribe();
    }, 100)
  }

  // Uncheck all 
  uncheckAllGrid(): void {
    this.selectedItems = [];
    if(this.grid) {
      this.grid.rows.forEach(r => r.isSelected = false);
    }

    this.searchResults.refresh();
  }

  // Pagination
  moveToPrevPage(): void {
    this.searchResults.moveToPreviousPage();
  }
  moveToNextPage(): void {
    this.searchResults.moveToNextPage();
  }
}
