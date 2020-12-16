import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AgentOrderDetailsPage} from './agent-order-details.page';
import {AgentOrderDetailsPageRoutingModule} from './agent-order-details-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgentOrderDetailsPageRoutingModule
    ],
    declarations: [AgentOrderDetailsPage]
})
export class AgentOrderDetailsModule {
}
