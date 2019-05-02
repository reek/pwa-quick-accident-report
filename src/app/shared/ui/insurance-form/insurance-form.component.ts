import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.scss'],
})
export class InsuranceFormComponent implements OnInit {

  @Input() public title: string = 'insurance form'
  @Input() public values: any
  @Output() public onSubmitted: EventEmitter<any> = new EventEmitter<any>()

  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.buildForm()
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      compagny: ['', [Validators.required]],
      policyNumber: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
    })
  }

  public onSubmit() {
    if (this.form.valid) {
      const payload: any = this.form.value
      this.onSubmitted.emit(payload)
    }
  }

}