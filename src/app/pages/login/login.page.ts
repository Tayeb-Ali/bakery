import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    accountType: any = 'Agent';
    loginInfo = {phone: null, password: null};

    constructor() {
    }

    ngOnInit() {
    }

}
