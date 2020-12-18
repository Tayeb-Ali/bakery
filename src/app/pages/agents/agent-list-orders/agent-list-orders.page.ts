import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-list-orders',
    templateUrl: './agent-list-orders.page.html',
    styleUrls: ['./agent-list-orders.page.scss'],
})
export class AgentListOrdersPage implements OnInit {
    order: any;
    data: any;

    constructor(
        protected router: Router,
        private nav: NavController
    ) {

        const data = this.router.getCurrentNavigation().extras;
        console.log('deit: ', data);
        // @ts-ignore
        this.data = data;
    }

    ngOnInit() {
    }

    openDetails(item){
this.nav.navigateForward('agent-order-details', item);
    }
}
