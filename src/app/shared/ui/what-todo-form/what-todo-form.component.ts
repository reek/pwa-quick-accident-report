import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-what-todo-form',
  templateUrl: './what-todo-form.component.html',
  styleUrls: ['./what-todo-form.component.scss'],
})
export class WhatTodoFormComponent implements OnInit {

  @Output() public onSubmitted: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() { }

  public onSubmit() {
    this.onSubmitted.emit({})
  }

}
