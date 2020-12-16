import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    accountType: any = 'Agent';
    response: any;
    loginInfo = {mobile: null, password: null};

    constructor(
        private api: ApiService,
        public route: Router,
        private appComponent: AppComponent) {
    }

    ngOnInit() {
    }

    async login() {
        this.api.postDataToApi('login', this.loginInfo)
            .subscribe(response => {
                this.response = response;
                if (this.response.status) {
                    // console.log(response);
                    localStorage.setItem('api_token', this.response.api_token);
                    localStorage.setItem('user', JSON.stringify(this.response.user));
                    if (this.response.user.role === 2) {
                        this.appComponent.getUser();
                        this.api.getToken();
                        this.route.navigateByUrl('/agent-home');
                    } else if (this.response.user.role === 3) {
                        this.route.navigateByUrl('/home');
                    } else {
                        alert('account problem call the owner');
                    }
                } else {
                    alert(`error: ${this.response.message}`);
                }
                // this.route.navigateByUrl('/home');
            }, error => {
                console.error('server: ', error);
            });
    }

}
