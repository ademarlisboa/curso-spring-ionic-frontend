
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CredenciaisDto } from "src/models/credenciaisDto";
import { LocalUser } from "src/models/localUser.dto";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";


@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage : StorageService) {
    }

    authenticate(creds: CredenciaisDto) {
        return this.http.post(`${API_CONFIG.login}`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });

    }

    sucessfullLogin(authorizationValue : string){
        let tnk = authorizationValue.substring(7);
        let user : LocalUser = {
            token : tnk
        }
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }

}
