import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-received-order-details',
    templateUrl: './received-order-details.page.html',
    styleUrls: ['./received-order-details.page.scss'],
})
export class ReceivedOrderDetailsPage implements OnInit {
    order: any;

    constructor() {
        this.order = {
            order_id: 22, quota: 23, arrive_on: '12/10/2020', request_on: '12/10/2020',
            user: {
                name: 'Ahmed Ali',
                baker: 'Hassan Ali'
            }
        };
    }

    ngOnInit() {
    }

}
