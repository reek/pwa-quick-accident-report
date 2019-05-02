import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Icon, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj.js';

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
  @Input() height: string = "150px"
  @Input() width: string = "100%"
  @Input() zoom: number = 18
  @Output() onClicked: EventEmitter<any> = new EventEmitter()
  @Output() onWatched: EventEmitter<any> = new EventEmitter()

  private iconFeature: Feature
  private iconStyle: Style
  private map: Map
  private view: View
  private position: any
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
      message: 'watching position...'
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
    if (this.map)
      this.setPosition(this.coords)
  }

  private initMap() {

    const position = fromLonLat([this.coords.longitude, this.coords.latitude])
    console.log("initMap", position, this.coords.longitude, this.coords.latitude)

    // Icon
    this.iconFeature = new Feature({
      geometry: new Point(position),
      name: 'You are here!'
    });

    this.iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        scale: .25,
        src: 'assets/images/marker/marker-orange.png'
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
      center: position,
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
      console.log(evt)
      this.onClicked.emit(evt.coordinate);
      //this.setPosition(evt.coordinate)
    });

  }

  private setPosition(coords) {
    const position = fromLonLat([coords.longitude, coords.latitude])
    this.iconFeature.setGeometry(new Point(position));
    this.view.setCenter(position);
  }

}


/*             OpenCycleMap
https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Transport
https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Landscape
https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Outdoors
https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Transport Dark
https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Spinal Map
https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Pioneer
https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Mobile Atlas
https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147
Neighbourhood
https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147 */

//url: "https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=7fd8a4ab716e4c278f951db2fe2e2147"
