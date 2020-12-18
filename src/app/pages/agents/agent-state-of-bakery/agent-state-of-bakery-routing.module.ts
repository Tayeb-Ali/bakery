import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentStateOfBakeryPage } from './agent-state-of-bakery.page';

const routes: Routes = [
  {
    path: '',
    component: AgentStateOfBakeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentStateOfBakeryPageRoutingModule {}
