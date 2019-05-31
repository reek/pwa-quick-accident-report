
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Insurance } from '../../models/insurance/insurance';
import { InsuranceService } from 'src/app/features/insurance/insurance.service';
import { IVehicle } from '../../models/vehicle/vehicle';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {

  @Input() public title: string = 'vehicle form'
  @Input() public values: IVehicle
  @Input() public readonly: boolean = false
  @Input() public button: string = "Done"
  @Output() public onSubmitted: EventEmitter<IVehicle> = new EventEmitter<IVehicle>()

  public form: FormGroup
  public insurances$: Observable<Insurance[]>

  constructor(
    private formBuilder: FormBuilder,
    private insuranceService: InsuranceService) {
    this.insurances$ = this.insuranceService.getInsurances()
  }

  public ngOnInit() {
    this.buildForm()
    this.completeForm()
  }

  public completeForm() {
    console.log("completeForm", this.values)
    if (this.values)
      this.form.patchValue(this.values)
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      _id: [''],
      imageUrl: [''],
      type: ['', Validators.required],
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      plateNumber: ['', [Validators.required]],
      registrationNumber: ['', [Validators.required]],
      insuranceCompany: ['', [Validators.required]],
      insurancePolicyNumber: ['', [Validators.required]],
    })
  }

  public onSubmit() {
    if (this.form.valid) {
      const values: IVehicle = this.form.value
      this.onSubmitted.emit(values)
      console.info('form', values);
    }
  }

}
