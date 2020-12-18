import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    isLoading = false;

    constructor(
        public toast: ToastController,
        public alert: AlertController,
        public api: ApiService,
        public router: Router,
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

    async setToast(getMessage: null, getDuration: 300) {
        const localToast = await this.toast.create({
            message: getMessage,
            duration: getDuration,
            position: 'middle'
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
        this.api.updateDataToApi('bakeries/' + data.id, data)
            .subscribe(response => {
                this.dismissLoader();
                console.log('update: ', response);
                // @ts-ignore
                if (response.success) {
                    // @ts-ignore
                    this.setToast(response.message, 200);
                    return this.router.navigateByUrl('home');
                } else {
                    // @ts-ignore
                    this.setToast('error', 200);
                    return response;
                }
            }, error => {
                console.error(error);
                this.dismissLoader();
            });
    }
}
