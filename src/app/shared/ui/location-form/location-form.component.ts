import { IAccident } from './../../models/accident/accident';
import { distinctUntilChanged, debounceTime, filter, tap, switchMap } from 'rxjs/operators';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { OsmService } from 'src/app/core/services/osm/osm.service';
import * as moment from 'moment';
import { ICoords } from '../../models/coords/coords';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {

  @Input() public title: string = 'location form'
  @Input() public values: any
  @Output() public onSubmitted: EventEmitter<any> = new EventEmitter<any>()

  public form: FormGroup
  private subject: BehaviorSubject<any>;
  public places$: Observable<[]>;
  public selected: string
  public date: string = moment().format('YYYY-MM-DD')
  public time: string = moment().format('HH:mm')

  constructor(
    private formBuilder: FormBuilder,
    private osmService: OsmService) {
    this.subject = new BehaviorSubject([])
    this.places$ = this.subject.asObservable()
  }

  public ngOnInit() {
    this.buildForm()
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      date: [this.date, [Validators.required]], // yyyy-mm-dd
      time: [this.time, [Validators.required]], // hh:mm
      address: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        postcode: ['', [Validators.required]],
        country: ['', [Validators.required]],
        latitude: ['', [Validators.required]],
        longitude: ['', [Validators.required]],
      })
    })
    this.onStreetChange()
  }

  public onStreetChange(): void {
    // doc: https://alligator.io/angular/reactive-forms-valuechanges/
    this.form.get('address.street').valueChanges
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
  public updateAddress(place: any) {
    console.log('updateAddress_', place)
    this.selected = place.street
    this.form.get("address").patchValue(place);
    this.subject.next([]) // reset
  }

  public getMapCoords(coords: Coordinates) {
    console.log(coords.latitude)
    this.osmService.getPlacesByCoords(coords.longitude, coords.latitude)
      .pipe(
        distinctUntilChanged())
      .subscribe((place: any) => {
        console.log("getPlacesByCoords", place)
        this.updateAddress(place)
      })
  }

  public updateTime(event: CustomEvent) {
    this.form.get('time').setValue(event.detail.value)
  }

  public updateDate(event: CustomEvent) {
    this.form.get('date').setValue(event.detail.value)
  }

  public onSubmit() {
    if (this.form.valid) {
      const data: any = this.form.value
      this.onSubmitted.emit(data)
      console.info('form accident', data);
    }
  }

}


