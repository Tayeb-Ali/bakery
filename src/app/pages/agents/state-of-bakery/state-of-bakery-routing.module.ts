import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateOfBakeryPage } from './state-of-bakery.page';

const routes: Routes = [
  {
    path: '',
    component: StateOfBakeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateOfBakeryPageRoutingModule {}
