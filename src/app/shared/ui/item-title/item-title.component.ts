import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-title',
  templateUrl: './item-title.component.html',
  styleUrls: ['./item-title.component.scss'],
})
export class ItemTitleComponent implements OnInit {

  @Input() public title: string = 'title'
  @Input() public icon: string = ""
  @Input() public color: string = "primary"

  constructor() { }

  ngOnInit() { }

}
