import { Component, OnInit } from '@angular/core';
import { OsmService } from 'src/app/core/services/osm/osm.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emergency-page',
  templateUrl: './emergency-page.component.html',
  styleUrls: ['./emergency-page.component.scss'],
})
export class EmergencyPageComponent implements OnInit {

  public height: string = "200px"
  public coords: { longitude: number, latitude: number }
  public place$: Observable<{}>
  public contacts: Object[] = [{
    icon: "notifications",
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
    icon: "help-buoy",
    name: "REGA air rescue",
    phone: "1414"
  }, {
    icon: "build",
    name: "TCS help",
    phone: "0800 140 140"
  }]

  constructor(
    private osmService: OsmService) { }

  public ngOnInit() { }

  public onCall(phoneNumber: string): void {
    location.href = 'tel:' + phoneNumber.replace(/\s+/, '')
  }

  public getPlace(coords: Coordinates) {
    this.place$ = this.osmService.getPlacesByCoords(coords.longitude, coords.latitude)
  }

}
