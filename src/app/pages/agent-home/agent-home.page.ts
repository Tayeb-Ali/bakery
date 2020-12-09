import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-agent-home',
    templateUrl: './agent-home.page.html',
    styleUrls: ['./agent-home.page.scss'],
})
export class AgentHomePage implements OnInit {
  bakers: any;

    constructor() {
        this.bakers = [
            {bakery_id: 1, name: 'Al- Muntasir Bakery'},
            {bakery_id: 2, name: 'Al Salaam Bakery'},
            {bakery_id: 3, name: 'Al Kheiyare Bakery'},
            {bakery_id: 4, name: 'Awlad Omudorman Bakery'},
        ];
    }

    ngOnInit() {
    }

}
