import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, ResponseType } from "../models/user";


@Injectable({
    providedIn: 'root'
})
export class QrcodeService {
    apiUrl = 'https://tst.agrofintech.kz/api/v1/getUser/';
    constructor(private http: HttpClient) { }
    
    getUser(hash: string): Observable<ResponseType> {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get<ResponseType>(this.apiUrl + hash);
    }
}