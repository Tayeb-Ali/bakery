import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivedOrderDetailsPageRoutingModule } from './received-order-details-routing.module';

import { ReceivedOrderDetailsPage } from './received-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivedOrderDetailsPageRoutingModule
  ],
  declarations: [ReceivedOrderDetailsPage]
})
export class ReceivedOrderDetailsPageModule {}
