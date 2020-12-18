import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    isLoading = false;

    constructor(
        public toast: ToastController,
        public alert: AlertController,
        public api: ApiService,
        public loading: LoadingController
    ) {
    }

    async setAlert(title: 'Info', getMessage: null) {
        const alert = await this.alert.create({
            cssClass: 'alert',
            header: title,
            // subHeader: 'Subtitle',
            message: getMessage,
            buttons: ['OK']
        });

        await alert.present();
    }

    async setToast(getMessage: null) {
        const localToast = await this.toast.create({
            message: getMessage,
            duration: 3000
        });
        await localToast.present();
    }


    async startLoad() {
        this.isLoading = true;

        return await this.loading
            .create({
                duration: 1000,
                message: 'please wait...',
            })
            .then((a) => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
    }

    async dismissLoader() {
        this.isLoading = false;
        return await this.loading.dismiss();
    }

    bakeryStatus(data) {
        this.startLoad();
        this.api.postDataToApi('b', data)
            .subscribe(response => {
                this.dismissLoader();
                console.log();
            }, error => {
                console.error(error);
                this.dismissLoader();
            });
    }
}
