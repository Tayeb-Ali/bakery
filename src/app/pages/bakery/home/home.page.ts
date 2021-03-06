import {Component} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {AppComponent} from '../../../app.component';
import {NavController} from '@ionic/angular';
import {HelperService} from '../../../services/helper.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    requests: any;
    userInfo: any;
    bakeryInfo: any;
    bakeryStatusIcon: any;

    constructor(private api: ApiService,
                private nav: NavController,
                public helper: HelperService,
                private appComponent: AppComponent) {
        this.userInfo = appComponent.userInfo;
        this.getBakery();
    }

    getBakery() {
        console.log('user: ', this.userInfo);
        this.helper.startLoad();
        this.api.getDataFromApi('home_bakery/' + this.userInfo.id)
            .subscribe(response => {
                // @ts-ignore
                this.requests = response.data;
                this.helper.dismissLoader();
                // @ts-ignore
                this.bakeryInfo = response.bakeryInfo;
                console.log(response);
                if (this.bakeryInfo.status) {
                    this.bakeryStatusIcon = 'assets/icon/on.svg';
                } else {
                    this.bakeryStatusIcon = 'assets/icon/off.svg';
                }
                // console.log('res: ', this.bakeryInfo);

            });
    }

    bakeryStatus() {
        this.nav.navigateForward('state-of-bakery', this.bakeryInfo);
    }

    requestOrder(item) {
        this.nav.navigateForward('order-details', item);
    }

    openList() {
        this.nav.navigateForward('list-orders', this.bakeryInfo);
    }

    orderDetails(order) {
        const orderInfo = {
            orderInfo: order,
            bakeryInfo: this.bakeryInfo
        };
        // @ts-ignore
        this.nav.navigateForward('received-order-details', orderInfo);
    }
}
