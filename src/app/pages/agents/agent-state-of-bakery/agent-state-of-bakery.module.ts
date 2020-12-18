import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AgentStateOfBakeryPageRoutingModule} from './agent-state-of-bakery-routing.module';

import {AgentStateOfBakeryPage} from './agent-state-of-bakery.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgentStateOfBakeryPageRoutingModule
    ],
    declarations: [AgentStateOfBakeryPage]
})
export class AgentStateOfBakeryPageModule {
}
