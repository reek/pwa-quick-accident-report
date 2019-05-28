import { IAccidentLocation } from '../../models/accident/accident';
import { distinctUntilChanged, debounceTime, filter, tap, switchMap } from 'rxjs/operators';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { OsmService, OsmPlace } from 'src/app/core/services/osm/osm.service';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { OwmService } from 'src/app/core/services/owm/owm.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {

  @Input() public title: string = 'location form'
  @Input() public values: IAccidentLocation
  @Input() public readonly: boolean = false
  @Input() public button: string = "Done"
  @Output() public onSubmitted: EventEmitter<IAccidentLocation> = new EventEmitter<IAccidentLocation>()

  public form: FormGroup
  private places: BehaviorSubject<any>;
  public places$: Observable<[]>;
  public selected: string
  public date: string = moment().format('YYYY-MM-DD')
  public time: string = moment().format('HH:mm')

  constructor(
    private formBuilder: FormBuilder,
    private osmService: OsmService,
    private owmService: OwmService) {
    this.places = new BehaviorSubject([OsmPlace])
    this.places$ = this.places.asObservable()
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
      }),
      weather: this.formBuilder.group({
        icon: [''],
        forecast: [''],
        temperature: [''],
        wind: [''],
        pressure: [''],
        humidity: [''],
        visibility: [''],
      })
    })
    //this.onStreetChange()
  }


  public updateAddress(place: OsmPlace) {
    console.log('updateAddress_', place)
    this.selected = place.street
    this.form.get("address").patchValue(place);
    this.places.next([]) // reset
  }

  public onMapCoords(coords: Coordinates) {

    this.osmService.getPlacesByCoords(coords)
      .pipe(
        distinctUntilChanged())
      .subscribe((place: OsmPlace) => {
        console.log("getPlacesByCoords", place)
        this.updateAddress(place)
      })

    this.owmService.getWeatherByCoords(coords)
      .pipe(
        distinctUntilChanged())
      .subscribe((weather: any) => {
        this.form.get('weather').patchValue(weather)
        console.log("getWeatherByCoords", weather)
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


