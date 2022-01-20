import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceComponent implements OnInit {
  testData: CollectionView | [];
  testData2: CollectionView | [];


  dropDownData1 = ['MS:OK', 'NG', '-MOS:Pass', 'Fail', '-'];
  dropDownData2 = [
    'MS:OK',
    'NG',
    '-MOS: Reproduction',
    'Non-Reproduction',
    '-',
  ];

  dropDownData3 = [
    'Irregular reproduction',
    'Malfunction IC',
    'Test problem',
    'Other',
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.testData = new CollectionView([
      { 
        uor: '-',
        custName: 'XYZ Inc.',
        prodName: 'IMX034PQH5-M',
        custReqDate: '2020/08/24',
        returnedQty: '1',
        failurePhenom: '100',
        reqRepDateInitial: '-',
        reqRepDateFinal: '2020/08/24',
        lastUpdate: '2020/07/12 16:48', 
        lastUpdatedby: 'SysOssFw'
      }, 
      { 
        uor: '-',
        custName: 'ABC Inc.',
        prodName: 'IMX034PQH5-M',
        custReqDate: '2020/08/24',
        returnedQty: '1',
        failurePhenom: '100',
        reqRepDateInitial: '-',
        reqRepDateFinal: '2020/08/24',
        lastUpdate: '2020/07/12 16:48', 
        lastUpdatedby: 'SysOssFw'
      },
    ]);
    this.testData2 = new CollectionView([
      { 
        status: 'Preparing the reply',
        reqNo: 'S21-0031-F01',
        reqDate: '2021/12/04 11:50',
        ver: 'Ver. 1(Initial)',
        custName: 'ARIMA OPT.',
        prodName: 'IMX001AKE-1',
        reqBy: '1',
        requester: 'mon clariza',
        reqSection: 'Factory Business System Management Section', 
        pic:'mon clariza',
        rrdinitial: '-',
        rrdFinal: '2021/12/04',
        lastUpdate: '2021/12/04 11:50',
        lastUpdatedBy:'mon clariza'
      }, 
      { 
        status: 'Preparing the reply',
        reqNo: 'S21-0031-F01',
        reqDate: '2021/12/04 11:50',
        ver: 'Ver. 1(Initial)',
        custName: 'DAMMY SHORT EN',
        prodName: 'C8492',
        reqBy: '1',
        requester: 'katniss everdeen',
        reqSection: 'Factory Business System Management Section', 
        pic:'katniss everdeen',
        rrdinitial: '-',
        rrdFinal: '2021/12/04',
        lastUpdate: '2021/12/04 11:50',
        lastUpdatedBy:'katniss everdeen'
      }, 
      { 
        status: 'Preparing the reply',
        reqNo: 'S21-0031-F01',
        reqDate: '2021/12/04 11:50',
        ver: 'Ver. 1(Initial)',
        custName: 'XYZ INC',
        prodName: 'C8492',
        reqBy: '1',
        requester: 'scarlett witch',
        reqSection: 'Factory Business System Management Section', 
        pic:'scarlett witch',
        rrdinitial: '-',
        rrdFinal: '2021/12/04',
        lastUpdate: '2021/12/04 11:50',
        lastUpdatedBy:'scarlett witch'
      }, 
     
    ]);
  }
 
}

