import { HttpClient, HttpHeaders, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { HttpHandler } from "@angular/common/http";
import 'rxjs';
import { map } from "rxjs";

@Injectable()
export class Api{
    server: string = "http://localhost/validadeProduto/";

    constructor(public http: HttpClient, public h: HttpHandler){
        
    }

    Api(dados:any, api: string){
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }

        let url = this.server + api;
        // return this.http.get('').pipe(map(res=> res.json()));
        return this.http.post(url, JSON.stringify(dados),httpOptions).pipe(
            map(res => {
                console.log(res)
            }));
            // .subscribe(data => {console.log(data)}
        //   );
        // return this.http.post(url, JSON.stringify(dados),httpOptions)//.map(res => (){console.log('duhas')})
    }
}