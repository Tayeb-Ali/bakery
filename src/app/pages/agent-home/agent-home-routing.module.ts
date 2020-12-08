import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentHomePage } from './agent-home.page';

const routes: Routes = [
  {
    path: '',
    component: AgentHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentHomePageRoutingModule {}
