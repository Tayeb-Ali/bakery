import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivedOrderDetailsPage } from './received-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivedOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivedOrderDetailsPageRoutingModule {}
