import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StateOfBakeryPageRoutingModule } from './state-of-bakery-routing.module';

import { StateOfBakeryPage } from './state-of-bakery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StateOfBakeryPageRoutingModule
  ],
  declarations: [StateOfBakeryPage]
})
export class StateOfBakeryPageModule {}
