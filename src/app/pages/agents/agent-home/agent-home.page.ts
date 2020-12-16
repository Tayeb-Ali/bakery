import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
    selector: 'app-agent-home',
    templateUrl: './agent-home.page.html',
    styleUrls: ['./agent-home.page.scss'],
})
export class AgentHomePage implements OnInit {
    bakers: any;

    constructor(private api: ApiService) {
        this.bakers = [
            {bakery_id: 1, name: 'Al- Muntasir Bakery'},
            {bakery_id: 2, name: 'Al Salaam Bakery'},
            {bakery_id: 3, name: 'Al Kheiyare Bakery'},
            {bakery_id: 4, name: 'Awlad Omudorman Bakery'},
        ];
    }

    ngOnInit() {
        this.getBakers();
    }

    getBakers() {
        this.api.getDataFromApi('bakeries')
            .subscribe(response => {
                console.log('res: ', response);
            });
    }
}
