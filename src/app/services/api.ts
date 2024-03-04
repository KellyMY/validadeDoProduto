import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs';

@Injectable()
export class Api{
    server: string = "http://localhost/validadeProduto/";

    constructor(private http: HttpClient){
        
    }

    Api(dados:any, api: string){
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }

        let url = this.server + api;
        return this.http.post(url, JSON.stringify(dados),httpOptions)//.map(res => (){console.log('duhas')})
    }
}