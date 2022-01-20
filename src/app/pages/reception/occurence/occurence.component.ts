import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConditionOccurence } from 'src/app/data/schema/api/receprion/condition-occurence';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OccurenceComponent implements OnInit {
  @Output() submitted = new EventEmitter<{ [key: string]: string }>();
  occurenceForm: FormGroup;
  occurenceData: { [key: string]: string } = {};

  constructor(
    private dialogRef: MatDialogRef<OccurenceComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.occurenceForm = this.formBuilder.group({
      use: [''],
      deliveryQty: [''],
      inputQty: [''],
      defectiveQty: [''],
      defectivePer: [''],
      ambientTemperature: [''],
      usageEnv: [''],
      temperatureProperty: [''],
      esdUsageTime: [''],
      supplyVoltage: [''],
      lightQt: [''],
      shutter: [''],
      gain: [''],
      driveMode: [''],
      output: [''],
      image: [''],
      registerSet: [''],
    });

    this.occurenceForm.patchValue(this.occurenceData);
  }

  submitInputs(): void {
    console.log(this.occurenceForm.value);
    this.submitted.emit(this.occurenceForm.value);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
