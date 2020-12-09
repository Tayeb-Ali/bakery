import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.page.html',
    styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
    order: any;

    constructor() {
        this.order = {
            order_id: 22, quota: 23, user: {
                name: 'Ahmed Ali',
                baker: 'Hassan Ali'
            }
        };
    }

    ngOnInit() {
    }

}
