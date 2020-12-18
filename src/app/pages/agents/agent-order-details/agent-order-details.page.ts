import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-order-details',
    templateUrl: './agent-order-details.page.html',
    styleUrls: ['./agent-order-details.page.scss'],
})
export class AgentOrderDetailsPage implements OnInit {
    order: any;
    data: any;

    constructor(private router: Router,
                private nav: NavController,
                private api: ApiService) {
        this.data = this.router.getCurrentNavigation().extras;
    }

    ngOnInit() {
        this.api.getDataFromApi('orders/' + this.data.id)
            .subscribe(response => {
                // @ts-ignore
                this.order = response.data;
                console.log('res: ', response);
            });
    }

    report(id: any) {
        this.nav.navigateForward('agent-state-of-bakery', id);
    }
}
