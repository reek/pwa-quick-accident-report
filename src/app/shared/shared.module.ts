import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './ui/header/header.component';
import { ImageComponent } from './ui/image/image.component';
import { TakePictureComponent } from './ui/take-picture/take-picture.component';
import { OlMapComponent } from './ui/ol-map/ol-map.component';
import { PersonFormComponent } from './ui/person-form/person-form.component';
import { AddressFormComponent } from './ui/address-form/address-form.component';

const PIPES = [
  SearchFilterPipe]

const COMPONENTS = [
  HeaderComponent,
  ImageComponent,
  TakePictureComponent, 
  OlMapComponent,
  PersonFormComponent, 
  AddressFormComponent]

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
