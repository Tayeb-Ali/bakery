import {Component} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {AppComponent} from '../../../app.component';
import {NavController} from '@ionic/angular';

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
                private appComponent: AppComponent) {
        this.userInfo = appComponent.userInfo;
        this.getBakery();
    }

    getBakery() {
        this.api.getDataFromApi('home_bakery/' + this.userInfo.id)
            .subscribe(response => {
                // @ts-ignore
                this.requests = response.data;
                // @ts-ignore
                this.bakeryInfo = response.bakeryInfo;
                if (this.bakeryInfo.status) {
                    this.bakeryStatusIcon = 'assets/icon/on.svg';
                } else {
                    this.bakeryStatusIcon = 'assets/icon/off.svg';
                }
                // console.log('res: ', this.bakeryInfo);
            });
    }

    bakeryStatus() {

    }

    requestOrder(item) {
        this.nav.navigateForward('order-details', item);
    }
}
