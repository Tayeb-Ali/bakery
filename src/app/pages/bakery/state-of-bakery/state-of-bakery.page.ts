import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HelperService} from '../../../services/helper.service';
import {AppComponent} from '../../../app.component';

@Component({
    selector: 'app-state-of-bakery',
    templateUrl: './state-of-bakery.page.html',
    styleUrls: ['./state-of-bakery.page.scss'],
})
export class StateOfBakeryPage implements OnInit {
    bakery: any = {reason: null, status: null};
    bakeryInfo: any;
    userInfo: any;
    reasons = [{
        name: 'At Work',
        value: false,
        status: true
    }, {
        name: 'Not in Work',
        value: false,
        status: false
    }];

    constructor(
        private route: Router,
        private appComponent: AppComponent,
        private helper: HelperService
    ) {
        this.bakeryInfo = this.route.getCurrentNavigation().extras;
        this.userInfo = this.appComponent.getUser();
    }

    ngOnInit() {
    }

    updateStatus() {
        const data = {
            id: this.bakeryInfo.id,
            status: this.bakery.status,
            reason: this.bakery.reason,
        };
        const response = this.helper.bakeryStatus(data);
    }

    selection(name: string) {
        this.reasons.forEach(x => {
            if (x.name !== name) {
                x.value = !x.value;
            }
        });
    }

    getStatus(status) {
        this.bakery.status = status;
        console.log('statusL: ', status);
    }

    // sendReport() {
    //
    // }
}
