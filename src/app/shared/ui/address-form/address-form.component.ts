import { IAddress } from './../../models/address/address';
import { filter, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OsmService } from 'src/app/core/services/osm/osm.service';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';
import { GeolocationPosition } from '@capacitor/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() public title: string = 'address form'
  @Input() public values: IAddress
  @Output() public onSubmitted: EventEmitter<any> = new EventEmitter<any>()

  public form: FormGroup
  public latitude: number
  public longitude: number
  private subject: BehaviorSubject<any>;
  public places$: Observable<[]>;
  public selected: string

  constructor(
    private formBuilder: FormBuilder,
    private osmService: OsmService,
    private geolocationService: GeolocationService) {
    this.subject = new BehaviorSubject([])
    this.places$ = this.subject.asObservable()
  }

  public ngOnInit() {
    this.buildForm()
    this.completeForm()
    this.onStreetChange()
  }

  public completeForm() {
    console.log("completeForm", this.values)
    if (this.values)
      this.form.patchValue(this.values)
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      longitude: ['0'],
      latitude: ['0']
    })
  }

  public updateAddress(place: any) {
    console.log('updateAddress_', place)
    this.selected = place.street
    this.form.patchValue(place);
    this.subject.next([]) // reset
  }

  public onStreetChange(): void {
    // doc: https://alligator.io/angular/reactive-forms-valuechanges/
    this.form.get('street').valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        filter(value => value.length > 5 && value != this.selected),
        tap(value => console.log('onStreetChange', value)),
        switchMap(value => this.osmService.getPlacesByStreet(value)))
      .subscribe(places => {
        console.log("getPlacesByStreet", places)
        this.subject.next(places)
      })
  }

  public onSubmit() {
    if (this.form.valid) {
      const values: IAddress = this.form.value
      this.onSubmitted.emit({ address: values })
    }
  }

  public onLocate() {
    // geolocation.service.ts
    this.geolocationService.getCurrentPosition()
      .then((position: GeolocationPosition) => {
        console.log('getGeolocation', position)
        const { coords: { latitude, longitude } } = position
        this.osmService.getPlacesByCoords(longitude, latitude)
          .pipe(
            distinctUntilChanged())
          .subscribe((place: any) => {
            console.log("getPlacesByCoords", place)
            this.updateAddress(place)
          })
      })
  }

}
