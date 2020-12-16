import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.page.html',
    styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
    order: any;
    data: any;

    constructor(private router: Router,
                private api: ApiService) {
        const data = this.router.getCurrentNavigation().extras;
        // console.log('deit: ', data);
        // @ts-ignore
        this.data = data;
        // this.order = {
        //     order_id: 22, quota: 23, user: {
        //         name: 'Ahmed Ali',
        //         baker: 'Hassan Ali'
        //     }
        // };
    }

    ngOnInit() {
        this.api.getDataFromApi('orders/' + this.data.id)
            .subscribe(response => {
                // @ts-ignore
                this.order = response.data;
                console.log('res: ', response);
            });
    }

}
