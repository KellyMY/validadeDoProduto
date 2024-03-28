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
    }
}