import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOrdersPageRoutingModule } from './list-orders-routing.module';

import { ListOrdersPage } from './list-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOrdersPageRoutingModule
  ],
  declarations: [ListOrdersPage]
})
export class ListOrdersPageModule {}
