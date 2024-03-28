<<<<<<< HEAD
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class Post{
    server: string = "http://localhost/validadeProduto";

    constructor(private http: HttpClient){
        
    }

    api(dados:any, api: string) {
        const httpOption = {
            readers: new HttpHeaders({'Content-Type': 'application/json'})
        }
=======
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
>>>>>>> c2f1482a0da3f42c7b9b65d8f98a7266af8786d4
    }
}