import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('api_token')}`
    })
};

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl = 'http://bakery.test/api/v1';
    private userToken: string;

    constructor(private http: HttpClient) {
    }

    getDataFromApi(url) {
        return this.http.get(`${this.baseUrl}/${url}`, httpOptions);
    }

    postDataToApi(url, data) {
        return this.http.post(`${this.baseUrl}/${url}`, data, httpOptions);
    }


}
