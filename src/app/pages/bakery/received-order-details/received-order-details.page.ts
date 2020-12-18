import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../../app.component';

@Component({
    selector: 'app-received-order-details',
    templateUrl: './received-order-details.page.html',
    styleUrls: ['./received-order-details.page.scss'],
})
export class ReceivedOrderDetailsPage implements OnInit {
    order: any;
    bakeryInfo: any;
    userInfo: any;
    orderinfo: any;

    constructor(
        private api: ApiService,
        private app: AppComponent,
        private router: Router
    ) {
        const response = this.router.getCurrentNavigation().extras;
        console.log(response);
        // @ts-ignore
        this.bakeryInfo = response.bakeryInfo;
        // @ts-ignore
        this.orderinfo = response.orderInfo;
        this.userInfo = this.app.getUser();
        // this.getOrder();
    }

    ngOnInit() {
        if (this.orderinfo) {
            return this.getOrderById(this.orderinfo.id);
        } else {
            return this.getOrder();
        }
    }

    inViewDidEnter() {

    }

    getOrder() {
        this.api.getDataFromApi('last_order/' + this.bakeryInfo.id)
            .subscribe(response => {
                console.log('resp: ', response);
                // @ts-ignore
                this.order = response.data;
            }, error => {
                console.log('error: ', error);
            });
    }

    getOrderById(id) {
        this.api.getDataFromApi('orders/' + id)
            .subscribe(response => {
                console.log('resp: ', response);
                // @ts-ignore
                this.order = response.data;
            }, error => {
                console.log('error: ', error);
            });
    }

}
