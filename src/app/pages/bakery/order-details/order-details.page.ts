import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {AppComponent} from '../../../app.component';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.page.html',
    styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
    order: any = {quota: null, userId: null, bakeryId: null};
    data: any;
    userInfo: any;

    constructor(private router: Router,
                private appComponent: AppComponent,
                private api: ApiService) {
        const data = this.router.getCurrentNavigation().extras;
        this.userInfo = this.appComponent.getUser();
        this.data = data;
    }

    ngOnInit() {
        this.order.bakeryId = this.data.id;
        this.order.userId = this.userInfo.id;
        this.api.postDataToApi('orders/', this.order)
            .subscribe(response => {
                // @ts-ignore
                this.order = response.data;
                console.log('res: ', response);
            });
    }

}
