import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        private http: HttpClient
    ) { }



    post(url: String, reqObj: any) {
        return new Promise((resolve) => {
            this.http.post(environment.api_url + url, reqObj).subscribe((res) => {
                resolve(res);
            })
        })
    }
}
