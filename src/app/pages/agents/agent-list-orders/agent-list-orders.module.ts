import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AgentListOrdersPageRoutingModule} from './agent-list-orders-routing.module';

import {AgentListOrdersPage} from './agent-list-orders.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgentListOrdersPageRoutingModule
    ],
    declarations: [AgentListOrdersPage]
})
export class AgentListOrdersPageModule {
}
