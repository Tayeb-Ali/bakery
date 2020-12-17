import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {AppComponent} from '../../../app.component';

@Component({
    selector: 'app-state-of-bakery',
    templateUrl: './state-of-bakery.page.html',
    styleUrls: ['./state-of-bakery.page.scss'],
})
export class StateOfBakeryPage implements OnInit {
    report: any = {reason: null, id: null, report_details: null, report_by: null};
    userInfo: any;
    id: any;
    reasons = [{
        name: 'Outta isn\'t in Bakery store?',
        value: false,
        title: 'Outta isn\'t in Bakery store'
    }, {
        name: 'Bakery is closed?',
        value: false,
        title: 'Bakery is closed'
    }, {
        name: 'Other',
        value: false,
        title: 'Other'
    }];


    constructor(private router: Router,
                private appComponent: AppComponent,
                private api: ApiService) {
        this.id = this.router.getCurrentNavigation().extras;
    }


    ngOnInit() {
        // this.appComponent.getUser();
        this.userInfo = this.appComponent.getUser();
        // console.log('myInfo: ', this.userInfo);
    }

    sendReport() {
        this.report.id = this.id;
        this.report.report_by = this.userInfo.id;
        console.log('send: ', this.report);
        this.api.postDataToApi('reports', this.report)
            .subscribe(response => {
                console.log('res: ', response);
            }, error => {
                console.error('Error: ', error);
            });
    }

    selection(name: string) {
        this.reasons.forEach(x => {
            if (x.name !== name) {
                x.value = !x.value;
            }
        });
    }

    getTitle(reason) {
        // console.log('title: ', reason);
        this.report.reason = reason;
    }
}
