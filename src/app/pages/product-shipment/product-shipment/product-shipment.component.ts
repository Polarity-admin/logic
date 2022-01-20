import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';

@Component({
    selector: 'app-product-shipment',
    templateUrl: './product-shipment.component.html',
    styleUrls: ['./product-shipment.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductShipmentComponent implements OnInit {
    testData: CollectionView | [];
    constructor() { }
  
    ngOnInit(): void {
        this.testData = new CollectionView([
            { 
                year: '2019/04',
                claim: '',
                principalProducts: '',
                category:'LSI',
                prodCategory1: '-',
                prodCategory2: '-',
                prodName: '',
                digitCateg: 'P91W',
                custCode: 'S07121',
                custname: 'XYZ Inc.',
                qtyShipped:''
            }, 
            { 
                year: '2019/06',
                claim: '',
                principalProducts: '',
                category:'LSI',
                prodCategory1: '-',
                prodCategory2: '-',
                prodName: '',
                digitCateg: 'P91W',
                custCode: '507900',
                custname: 'ABC Inc.',
                qtyShipped:''
            }, 
            { 
                year: '2019/07',
                claim: '',
                principalProducts: '',
                category:'LSI',
                prodCategory1: 'MOS',
                prodCategory2: '-',
                prodName: '',
                digitCateg: 'P91W',
                custCode: 'S07121',
                custname: 'DEF Inc.',
                qtyShipped:''
            }, 
            
        ]);
    }
  
  }
  
