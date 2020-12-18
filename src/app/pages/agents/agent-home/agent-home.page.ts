import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {AppComponent} from '../../../app.component';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-agent-home',
    templateUrl: './agent-home.page.html',
    styleUrls: ['./agent-home.page.scss'],
})
export class AgentHomePage implements OnInit {
    bakers: any;
    userInfo: any;

    constructor(
        private api: ApiService,
        private navController: NavController,
        public appComponent: AppComponent
    ) {
        console.log('res: ', this.userInfo = appComponent.userInfo);
        // this.bakers = [
        //     {bakery_id: 1, name: 'Al- Muntasir Bakery'},
        //     {bakery_id: 2, name: 'Al Salaam Bakery'},
        //     {bakery_id: 3, name: 'Al Kheiyare Bakery'},
        //     {bakery_id: 4, name: 'Awlad Omudorman Bakery'},
        // ];
    }

    ngOnInit() {
        this.getBakers();
    }

    getBakers() {
        this.api.getDataFromApi('bakeries')
            .subscribe(response => {
                console.log('res: ', response);
                // @ts-ignore
                this.bakers = response.data;
            });
    }

    listOrders(item) {
        this.navController.navigateForward('/agent-list-orders', item);
    }
}
