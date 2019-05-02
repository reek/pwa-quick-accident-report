import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../../feedback.service';
import { NotifyService } from 'src/app/core/services/notify/notify.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss'],
})
export class FeedbackPageComponent implements OnInit {

  public title: string = "Share Your Feedback"
  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private feedbackService: FeedbackService,
    private notifyService: NotifyService) { }

  public ngOnInit() {
    this.buildForm()
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      feedback: ['', [Validators.minLength(10)]]
    })
  }

  public onSend() {
    if (this.form.valid) {
      console.log('form feedback submitted');
      const payload: any = this.form.value
      this.feedbackService.send(payload)
        .subscribe((res: any) => {
          console.log('server feedback resp!', res)
          if (res.ok) {
            return this.notifyService.show("You're the best! Thanks for helping 😁")
          }
          return this.notifyService.show("Error feedback not sent!")
        });
    }
  }

  public onReset() {
    this.form.reset();
  }

}