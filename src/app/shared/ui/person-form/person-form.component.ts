
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidateIsEmailValid } from '../../validators/field.validator';
import { phoneNumberPattern } from '../../validators/patterns';
import { IPerson } from '../../models/person/person';
import { OsmPlace } from 'src/app/core/services/osm/osm.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @Input() public title: string = 'person form'
  @Input() public values: IPerson
  @Input() public readonly: boolean = false
  @Input() public button: string = "Done"
  @Output() public onSubmitted: EventEmitter<IPerson> = new EventEmitter<IPerson>()

  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder) {
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
      gender: ['', [Validators.required]],
      firstName: ['', [Validators.minLength(3)]],
      lastName: ['', [Validators.minLength(3)]],
      birthDate: ['', [Validators.required]],
      email: ['', [ValidateIsEmailValid]],
      phone: ['', [Validators.pattern(phoneNumberPattern)]],
      drivingLicense: ['', [Validators.required]],
      address: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        postcode: ['', [Validators.required]],
        country: ['', [Validators.required]],
        latitude: ['', [Validators.required]],
        longitude: ['', [Validators.required]],
      })
    })
  }

  public onSubmit() {
    if (this.form.valid) {
      const payload: IPerson = this.form.value
      this.onSubmitted.emit(payload)
    }
  }

  public updateBirthDate(event: CustomEvent) {
    const value = event.detail.value
    const date = value.split("T").shift()
    this.form.get("birthDate").setValue(date)
  }

  public updateAddress(place: OsmPlace) {
    this.form.get("address").patchValue(place)
  }

}
