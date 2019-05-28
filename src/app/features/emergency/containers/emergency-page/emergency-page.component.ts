import { Component, OnInit } from '@angular/core';
import { OsmService } from 'src/app/core/services/osm/osm.service';
import { Observable } from 'rxjs';
import { ICoords } from 'src/app/core/services/geolocation/geolocation.service';

@Component({
  selector: 'app-emergency-page',
  templateUrl: './emergency-page.component.html',
  styleUrls: ['./emergency-page.component.scss'],
})
export class EmergencyPageComponent implements OnInit {

  public place$: Observable<{}>
  public contacts: Object[] = [{
    icon: "megaphone",
    name: "Emergency",
    phone: "112"
  }, {
    icon: "star",
    name: "Police",
    phone: "117"
  }, {
    icon: "flame",
    name: "Fire",
    phone: "118"
  }, {
    icon: "medkit",
    name: "Ambulances",
    phone: "144"
  }, {
    icon: "airplane",
    name: "Air Rescue (REGA)",
    phone: "1414"
  }, {
    icon: "build",
    name: "Mechanic Help (TCS)",
    phone: "0800 140 140"
  }]

  constructor(
    private osmService: OsmService) { }

  public ngOnInit() { }

  public onCall(phoneNumber: string): void {
    location.href = 'tel:' + phoneNumber.replace(/\s+/, '')
  }

  public getPlace(coords: ICoords): void {
    this.place$ = this.osmService.getPlacesByCoords(coords)
  }

}
