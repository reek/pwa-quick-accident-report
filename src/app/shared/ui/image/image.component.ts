import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {

  @Input() src: string
  @Input() height: string = "120px"
  @Input() bgSize: string = "cover"

  public style: string
  public bgImage: SafeResourceUrl

  constructor(
    private sanitizer: DomSanitizer) {
    //this.src = 
  }

  ngOnInit() {
    this.stylize()
  }

  stylize() {
    //this.src = `url('${this.sanitizer.bypassSecurityTrustStyle(this.src)}')`
    //this.style = `{width: 100%; height: 200px;}` , 'background-size': '${this.bgSize}', 'width':'100%', 'height': '${this.height}'
    //this.bgImage = this.sanitizer.bypassSecurityTrustStyle(`ùrl('${this.src}')`);
    //this.bgImage = this.sanitizer.bypassSecurityTrustStyle(this.src);
    this.bgImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.src})`);
  }

}
