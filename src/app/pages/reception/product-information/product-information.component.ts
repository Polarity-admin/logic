import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
