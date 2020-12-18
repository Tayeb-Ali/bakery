import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// const httpOptions = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('api_token')}`
//     })
// };

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl = 'http://bakery.test/api/v1';
    private httpOptions: any;

    constructor(private http: HttpClient) {
        this.getToken();
    }

    getToken() {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('api_token')}`
            })
        };
    }

    getDataFromApi(url) {
        // this.getToken();
        return this.http.get(`${this.baseUrl}/${url}`, this.httpOptions);
    }

    postDataToApi(url, data) {
        // this.getToken();
        return this.http.post(`${this.baseUrl}/${url}`, data, this.httpOptions);
    }

    updateDataToApi(url, data) {
        // this.getToken();
        return this.http.put(`${this.baseUrl}/${url}`, data, this.httpOptions);
    }


}
