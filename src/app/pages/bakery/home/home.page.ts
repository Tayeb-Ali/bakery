import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    requestes: any;

    constructor() {
        this.requestes = [
            {
                order_id: 1,
                requested_on: '22/10/2020',
                arrive_on: '30/10/2020',
            }, {
                order_id: 22,
                requested_on: '22/10/2020',
                arrive_on: '30/10/2020',
            }, {
                order_id: 45,
                requested_on: '22/10/2020',
                arrive_on: '30/10/2020',
            }
        ];
    }

}
