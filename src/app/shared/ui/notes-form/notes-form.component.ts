import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss'],
})
export class NotesFormComponent implements OnInit {

  @Input() public title: string = 'notes form'
  @Input() public values: { key: string }
  @Input() public readonly: boolean = false
  @Input() public button: string = "Done"
  @Output() public onSubmitted: EventEmitter<any> = new EventEmitter<any>()

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
      notes: ['']
    })
  }

  public onSubmit() {
    if (this.form.valid) {
      const payload: any = this.form.value
      this.onSubmitted.emit(payload)
    }
  }

}