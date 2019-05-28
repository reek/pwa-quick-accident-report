import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './ui/header/header.component';
import { TakePictureComponent } from './ui/take-picture/take-picture.component';
import { OlMapComponent } from './ui/ol-map/ol-map.component';
import { PersonFormComponent } from './ui/person-form/person-form.component';
import { ItemTitleComponent } from './ui/item-title/item-title.component';
import { SearchAddressComponent } from './ui/search-address/search-address.component';
import { VehicleFormComponent } from './ui/vehicle-form/vehicle-form.component';
import { ImageViewerComponent } from './ui/image-viewer/image-viewer.component';

const PIPES = [
  SearchFilterPipe]

const COMPONENTS = [
  HeaderComponent,
  ImageViewerComponent,
  TakePictureComponent,
  OlMapComponent,
  PersonFormComponent,
  VehicleFormComponent,
  SearchAddressComponent,
  ItemTitleComponent]

const MODULES = [
  CommonModule,
  IonicModule,
  FormsModule,
  ReactiveFormsModule]

const PROVIDERS = []

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  entryComponents: [ImageViewerComponent],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES,
    ...PIPES
  ]
})
export class SharedModule { }
