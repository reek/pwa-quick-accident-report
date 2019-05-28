import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { distinctUntilChanged, debounceTime, filter, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { OsmPlace, OsmService } from 'src/app/core/services/osm/osm.service';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';
import { GeolocationPosition } from '@capacitor/core';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.scss'],
})
export class SearchAddressComponent implements OnInit {

  @Output() public onSelected: EventEmitter<OsmPlace> = new EventEmitter<OsmPlace>()
  private placesSubject: BehaviorSubject<OsmPlace[]>;
  public places$: Observable<OsmPlace[]>;
  public selected: string = ''

  constructor(
    private osmService: OsmService,
    private geolocationService: GeolocationService) {
    this.placesSubject = new BehaviorSubject([])
    this.places$ = this.placesSubject.asObservable()
  }

  public ngOnInit() { }

  public onSelect(place: OsmPlace) {
    this.selected = place.street
    this.onSelected.emit(place)
    this.onReset()
  }

  public onReset() {
    this.placesSubject.next([])
  }

  public onSearch(evt: CustomEvent): void {
    const value = evt.detail.value
    if (value.length > 5 && value !== this.selected) {
      this.osmService.getPlacesByStreet(value)
        .pipe(
          distinctUntilChanged(),
          debounceTime(500),
          tap(value => console.log('getPlacesByStreet', value)))
        .subscribe((places: OsmPlace[]) => {
          this.placesSubject.next(places)
        }, err => {
          this.onReset()
          console.error(err)
        })
    }
  }

  public onLocate() {
    // geolocation.service.ts
    this.geolocationService.getCurrentPosition()
      .then((position: GeolocationPosition) => {
        const { coords } = position
        this.osmService.getPlacesByCoords(coords)
          .pipe(
            tap(place => {
              console.log('getGeolocation', position)
              console.log("getPlacesByCoords", place)
            }),
            distinctUntilChanged())
          .subscribe((place: OsmPlace) => this.onSelected.emit(place),
            err => console.error(err))
      })
  }
}
