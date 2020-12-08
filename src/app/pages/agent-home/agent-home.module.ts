import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentHomePageRoutingModule } from './agent-home-routing.module';

import { AgentHomePage } from './agent-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentHomePageRoutingModule
  ],
  declarations: [AgentHomePage]
})
export class AgentHomePageModule {}
