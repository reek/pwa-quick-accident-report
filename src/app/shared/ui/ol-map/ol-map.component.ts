import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Icon, Style } from 'ol/style';
import { fromLonLat, toLonLat } from 'ol/proj.js';
import { LoadingController } from '@ionic/angular';
import { GeolocationOptions, Capacitor, Toast, Geolocation } from '@capacitor/core';
import { MapBrowserPointerEvent } from 'openlayers';


@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.scss'],
})
export class OlMapComponent implements OnInit {

  @Input() coords: { longitude: number, latitude: number }
  @Input() height: string = "50%"
  @Input() width: string = "100%"
  @Input() zoom: number = 18
  @Output() onWatched: EventEmitter<any> = new EventEmitter()

  private iconFeature: Feature
  private iconStyle: Style
  private map: Map
  private view: View
  private tileLayer: TileLayer
  private vectorSource: VectorSource
  private vectorLayer: VectorLayer

  constructor(
    private loadingCtrl: LoadingController) {
  }

  async ngOnInit() {
    if (!this.coords)
      await this.getCurrentPosition();
    this.initMap()
  }

  async getCurrentPosition() {

    // open waiting spinner
    const loading: HTMLIonLoadingElement = await this.loadingCtrl.create({
      message: 'Watching position...'
    });
    await loading.present();

    const isAvailable = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      await Toast.show({
        text: 'Geolocation not supported on this platform 😢'
      });
      return;
    }
    const options: GeolocationOptions = {
      enableHighAccuracy: true
    };
    const coordinates = await Geolocation.getCurrentPosition(options).catch(err => (loading.dismiss(), err));
    console.log('getCurrentPosition', coordinates);
    if (!coordinates.coords) {
      await Toast.show({
        text: coordinates.message || 'Error no coordonate 😢'
      });
      this.coords = null;
      return;
    }
    this.coords = coordinates.coords;
    this.onWatched.emit(this.coords)
    loading.dismiss();
    if (this.map) {
      const coordXY = fromLonLat([this.coords.longitude, this.coords.latitude])
      this.setPosition(coordXY)
    }
  }

  private initMap() {

    const coordXY = fromLonLat([this.coords.longitude, this.coords.latitude])
    console.log("initMap", coordXY, this.coords.longitude, this.coords.latitude)

    // Icon
    this.iconFeature = new Feature({
      geometry: new Point(coordXY),
      name: 'You are here!'
    });

    this.iconStyle = new Style({
      image: new Icon({
        anchor: [.43, 1], // position of icon
        scale: .15,
        //size: [48, 48], // not work
        src: 'assets/images/marker/marker-3.png'
      })
    });

    this.iconFeature.setStyle(this.iconStyle);

    this.vectorSource = new VectorSource({
      features: [this.iconFeature]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });


    this.tileLayer = new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    });

    this.view = new View({
      center: coordXY,
      zoom: this.zoom
    })

    this.map = new Map({
      layers: [this.tileLayer, this.vectorLayer],
      target: "map",
      view: this.view,
      controls: [] // remove zoom buttons
    });

    // listener event Map
    this.map.on('singleclick', (evt: MapBrowserPointerEvent) => {
      const coordXY = evt.coordinate
      const [longitude, latitude] = toLonLat(coordXY)
      this.onWatched.emit({ longitude, latitude });
      this.setPosition(coordXY)
    });

  }

  private setPosition(coordXY) {
    this.iconFeature.setGeometry(new Point(coordXY));
    this.view.setCenter(coordXY);
  }

}
