import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ApiService} from '../../../services/api.service';
import {IonInfiniteScroll} from '@ionic/angular/directives/proxies';

@Component({
    selector: 'app-list-orders',
    templateUrl: './list-orders.page.html',
    styleUrls: ['./list-orders.page.scss'],
})
export class ListOrdersPage implements OnInit {
    orders: any;
    bakeryInfo: any;

    @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

    page: number;
    perPage = 0;
    totalData: number;
    totalPage: number;
    response: any;

    constructor(
        protected router: Router,
        private api: ApiService,
        private nav: NavController
    ) {
        this.bakeryInfo = this.router.getCurrentNavigation().extras;
    }

    ngOnInit() {
        this.api.getDataFromApi('bakery_orders/' + this.bakeryInfo.id)
            .subscribe(response => {
                console.log(response);
                // @ts-ignore
                this.orders = response.data;
            });
    }

    openDetails(item) {
        this.nav.navigateForward('agent-order-details', item);
    }

    async doRefresh(ev) {
        this.orders = null;
        await this.ngOnInit();
        // setTimeout(() => {
        //     console.log('Async operation has ended');
        //     event.target.complete();
        // }, 2000);
        await ev.target.complete();
    }

    loadData(event) {
        this.page = this.page + 1;
        setTimeout(() => {
            this.api.getDataFromApi(`bakery_orders/${this.bakeryInfo.id}?page=${this.page}`)
                .subscribe(
                    res => {
                        this.response = res;
                        // this.requestsData = this.properties.data;
                        this.perPage = this.response.per_page;
                        this.totalData = this.response.total;
                        this.totalPage = this.response.total_pages;
                        const length = this.response.data.length;
                        console.log(this.orders);
                        for (let i = 0; i < length; i++) {
                            this.orders.push(this.response.data[i]);
                        }
                    },
                    error =>
                        console.error('serverRes: ', error)), event.target.complete();
            this.toggleInfiniteScroll();
        }, 1000);

    }

    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
}
