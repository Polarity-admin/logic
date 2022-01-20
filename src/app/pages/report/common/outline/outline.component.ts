import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutlineComponent implements OnInit {
  @Input() type: string = 'request';

  constructor(
  ) {}

  ngOnInit(): void {
  }

  checkType() {
    return this.type === 'request';
  }
}
