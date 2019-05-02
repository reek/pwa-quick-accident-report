
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPersonal } from '../../models/personal/personal';
import { ValidateIsEmailValid } from '../../validators/field.validator';
import { phoneNumberPattern } from '../../validators/patterns';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @Input() public title: string = 'person form'
  @Input() public values: IPersonal
  @Output() public onSubmitted: EventEmitter<IPersonal> = new EventEmitter<IPersonal>()

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
      phoneNumber: ['', [Validators.pattern(phoneNumberPattern)]],
      drivingLicense: ['', [Validators.required]],
    })
  }

  public onSubmit() {
    if (this.form.valid) {
      const payload: IPersonal = this.form.value
      this.onSubmitted.emit(payload)
    }
  }

  public updateBirthDate(event: CustomEvent) {
    const datetime = event.detail.value
    this.form.get("birthDate").setValue(datetime)
    //console.log(event)
  }

}
