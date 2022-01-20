import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid, Row } from '@grapecity/wijmo.grid';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { Customer } from 'src/app/data/schema/search/customer';
import { CustomerService } from 'src/app/data/service/customer.service';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SelectCustomerComponent implements OnInit {
  @Output() selectedCustomer = new EventEmitter<Customer>();

  dropDownData1 = [
    'Test option 1', 
    'Test option 2'
  ];

  selected: Row = null;
  selector: Selector = null;

  searchResults: CollectionView<Customer[]> = new CollectionView();

  constructor(
    private dialogRef: MatDialogRef<SelectCustomerComponent>,
    private customerService: CustomerService  
  ) {}

  ngOnInit(): void {}

  onInitialized(grid: FlexGrid) {
    this.selector = new Selector(grid, {
      itemChecked: (e) => {
        this.selected = grid.rows.filter((r: Row) => {
          if (this.selected && this.selected.dataIndex === r.dataIndex) {
            r.isSelected = false;
          }

          return r.isSelected;
        })[0];
      },
      showCheckAll: false,
    });
  }

  onSearch(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.searchResults = new CollectionView(customers, {
        pageSize: 10
      });
    });
  }

  onSelectCustomer(): void {
    this.selectedCustomer.emit(this.selected.dataItem);
    this.onCloseDialog();
  }

  // Dialog
  onCloseDialog(): void {
    this.dialogRef.close();
  }

  // Pagination
  moveToNextPage(): void {
    this.searchResults.moveToNextPage();
  }
  moveToPrevPage(): void {
    this.searchResults.moveToPreviousPage();
  }

  ngOnDestroy(): void {
    this.selectedCustomer.unsubscribe();
  }
}
