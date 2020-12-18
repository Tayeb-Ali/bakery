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
    bakery: any;
    bakeryInfo: any;
    userInfo: any;
    reasons = [{
        name: 'At Work',
        value: true,
        title: 'At Work'
    }, {
        name: 'Not in Work',
        value: false,
        title: 'Not in Work'
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
        this.helper.bakeryStatus(this.bakeryInfo);
    }

    selection(name: string) {
        this.reasons.forEach(x => {
            if (x.name !== name) {
                x.value = !x.value;
            }
        });
    }
}
