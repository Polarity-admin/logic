import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-email-destination',
  templateUrl: './email-destination.component.html',
  styleUrls: ['./email-destination.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailDestinationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
